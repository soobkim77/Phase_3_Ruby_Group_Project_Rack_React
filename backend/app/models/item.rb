class Item < ActiveRecord::Base
    belongs_to :seller
    belongs_to :category

end