# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_19_175215) do

  create_table "categories", force: :cascade do |t|
    t.string "name"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.integer "seller_id"
    t.integer "category_id"
    t.string "description"
    t.float "price"
    t.string "condition"
    t.index ["category_id"], name: "index_items_on_category_id"
    t.index ["seller_id"], name: "index_items_on_seller_id"
  end

  create_table "purchases", force: :cascade do |t|
    t.integer "item_id"
    t.integer "seller_id"
    t.integer "purchaser_id"
    t.index ["item_id"], name: "index_purchases_on_item_id"
    t.index ["purchaser_id"], name: "index_purchases_on_purchaser_id"
    t.index ["seller_id"], name: "index_purchases_on_seller_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password"
  end

end
