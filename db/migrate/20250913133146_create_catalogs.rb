class CreateCatalogs < ActiveRecord::Migration[8.0]
  def change
    create_table :catalogs do |t|
      t.string :user_name
      t.string :email
      t.string :phone
      t.string :country
      t.string :region
      t.string :city
      t.string :product_name
      t.text :description
      t.string :product_category
      t.integer :quantity
      t.decimal :price
      t.string :currency
      t.boolean :active, default: false

      t.timestamps
    end
  end
end
