require 'bcrypt'

class User < ActiveRecord::Base
    has_many :items
    has_many :categories, through: :items

    def format_user
        {id: self.id, name: self.name}
    end
end