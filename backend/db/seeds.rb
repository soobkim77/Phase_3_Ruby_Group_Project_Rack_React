# Clearing old data
Purchase.destroy_all
Item.destroy_all
User.destroy_all
Category.destroy_all

# Seeding Users
puts "Creating Users"
5.times do
    User.create(name: Faker::Name.name, password: Faker::Lorem.word)
end

# Seeding Categories
puts "Creating Categories"
clothing = Category.create(name: "clothing")
shoes = Category.create(name: "shoes")
accesories = Category.create(name: "accesories")

# Seeding Items
condition = ["used", "new", "worn"]
puts "Creating Items"
50.times do
    Item.create(name: Faker::Commerce.product_name, image_url: Faker::LoremFlickr.image, seller: User.all.sample, category_id: Category.all.sample.id, description: Faker::Lorem.sentence, price: Faker::Commerce.price, condition: condition.sample)
end


# Seeding Purchases
# Purchase.create(item_id: Item.all.sample.id, seller_id: Seller.all.sample.id, purchaser_id: Purchaser.all.sample.id)