# Clearing old data
Purchase.destroy_all
Item.destroy_all
User.destroy_all
Category.destroy_all

# Seeding Users
User.create(name: Faker::Name.name, password: Faker::Lorem.word)

# Seeding Categories
clothing = Category.create(name: "clothing")
shoes = Category.create(name: "shoes")
accesories = Category.create(name: "accesories")

# Seeding Items
Item.create(name: Faker::Commerce.product_name, image_url: Faker::LoremFlickr.image, seller_id: Seller.all.sample.id, category_id: Category.all.sample.id, description: Faker::Lorem.sentence, price: Faker::Commerce.price, condition: "used")

# Seeding Purchases
Purchase.create(item_id: Item.all.sample.id, seller_id: Seller.all.sample.id, purchaser_id: Purchaser.all.sample.id)