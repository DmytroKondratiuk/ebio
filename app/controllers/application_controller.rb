class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  USERNAME = ENV["ADMIN_USERNAME"]
  PASSWORD = ENV["ADMIN_PASSWORD"]

  helper_method :admin_signed_in?

  # before_action :authenticate, only: %i[destroy edit]

  def log_as_admin
    authenticate

    redirect_back(fallback_location: root_path)
  end

  private

    def authenticate
      authenticate_or_request_with_http_basic do |username, password|
        username == USERNAME && password == PASSWORD
      end
    end

    def admin_signed_in?
      return false unless request.authorization

      username, password = ActionController::HttpAuthentication::Basic.decode_credentials(request).split(":")
      username == USERNAME && password == PASSWORD
    end
end
