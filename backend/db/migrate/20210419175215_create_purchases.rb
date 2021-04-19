class CreatePurchases < ActiveRecord::Migration[5.2]
  def change
    create_table :purchases do |t|
      t.belongs_to :item
      t.integer :seller_id
      t.integer :purchaser_id
      
    end
  end
end
