class Item < ActiveRecord::Base
    belongs_to :seller, :class_name => "User"
    belongs_to :category


    def format_item
        {id: self.id, name: self.name, category: self.category.name, seller: self.seller, imageUrl: self.image_url, description: self.description, price: self.price, condition: self.condition}
    end
end