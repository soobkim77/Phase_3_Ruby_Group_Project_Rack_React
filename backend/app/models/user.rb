class User < ActiveRecord::Base
    has_many :items
    has_many :categories, through: :items

end