namespace :i18n do
  namespace :json do
    desc "Export i18n translations to JSON file"
    task export: :environment do
      # Get translations from I18n::JS
      translations = {
        en: I18n::JS.translations[:en],
        uk: I18n::JS.translations[:uk]
      }

      # Ensure the directory exists
      FileUtils.mkdir_p("public/javascripts")

      # Write translations to JSON file
      File.write(
        "public/javascripts/translations.json",
        JSON.pretty_generate(translations)
      )

      puts "Translations exported to public/javascripts/translations.json"
    end
  end
end
