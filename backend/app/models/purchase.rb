class Purchase < ActiveRecord::Base
    belongs_to :item
    belongs_to :seller
    belongs_to :purchaser

end