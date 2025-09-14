namespace :i18n do
  namespace :js do
    desc "Export i18n translations to JavaScript module"
    task export_module: :environment do
      I18n.load_path = Dir[Rails.root.join("config", "locales", "*.{rb,yml}")]
      I18n.backend.load_translations

      translations = {
        en: I18n.backend.translations[:en] || {},
        uk: I18n.backend.translations[:uk] || {}
      }

      js_content = "export default #{JSON.pretty_generate(translations)};"

      File.write(
        Rails.root.join("app", "javascript", "translations.js"),
        js_content
      )

      puts "Translations exported to app/javascript/translations.js"
    end
  end
end
