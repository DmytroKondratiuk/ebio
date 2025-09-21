class CatalogItemsBoard
  attr_reader :catalog_items

  def initialize(catalog_items)
    @catalog_items = catalog_items
  end

  def data
    catalog_items.map { |catalog_item| catalog_item_formater(catalog_item) }
  end

  private

  def catalog_item_formater(item)
    {
      key: item.id,
      id: item.id,
      user_name: item.user_name,
      email: item.email,
      phone: item.phone,
      country: item.country,
      region: item.region,
      city: item.city,
      product_name: item.product_name,
      description: item.description,
      product_category: item.product_category,
      quantity: item.quantity,
      price: item.price,
      currency: item.currency,
      active: item.active,
      created_at: item.created_at
    }
  end
end
