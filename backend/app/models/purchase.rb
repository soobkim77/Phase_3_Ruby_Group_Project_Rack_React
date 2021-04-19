class Purchase < ActiveRecord::Base
    belongs_to :item
    belongs_to :seller, :class_name => "User"
    belongs_to :purchaser, :class_name => "User"

end