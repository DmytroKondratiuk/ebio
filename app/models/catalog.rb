class Catalog < ApplicationRecord
  CURRENCY_LIST = %w[uah usd eur].freeze
  PRODUCT_CATEGORY_LIST = %w[
    vegetable animal microbiological organic energy raw_materials food feed other
    ].freeze

  validates :product_name, presence: true
  validates :user_name, presence: true
  validates :email, presence: true
  validates :phone, presence: true
  validates :country, presence: true

  validates :product_category, presence: true, inclusion: { in: PRODUCT_CATEGORY_LIST }
  validates :currency, presence: true, inclusion: { in: CURRENCY_LIST }
end
