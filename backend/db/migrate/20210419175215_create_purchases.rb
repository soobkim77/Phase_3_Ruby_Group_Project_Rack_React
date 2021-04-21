class CreatePurchases < ActiveRecord::Migration[5.2]
  def change
    create_table :purchases do |t|
      t.belongs_to :item
      t.belongs_to :seller
      t.belongs_to :purchaser
    end
  end
end
