class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|

      t.string :name
      t.string :image_url
      t.belongs_to :seller
      t.belongs_to :category
      t.string :description
      t.float :price
      t.string :condition
    end
  end
end
