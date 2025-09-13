require "i18n/js"

# Налаштування для експорту чистого JSON
I18n::JS.config do |config|
  config.export_i18n_js = false
  config.translation_segments = true
end
