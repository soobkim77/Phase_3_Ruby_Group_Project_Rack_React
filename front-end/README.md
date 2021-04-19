## Schema - Backend

### Table User
    t.name
    t.password


### Table Items
    :name
    :image_url
    :seller_id(user_id)
    :category_id

    #### Stretching

    :price
    :is_available
    :condition
    

### Table Category
    :name

### Table Purchases (stretching)
    :item_id
    :seller_id
    :purchaser_id


## Frontend
/login
copypasta user validation from last project

/market
Filter/search 
items/ grid view
navbar 

/user
items that user has, button to switch if item is avaiable
add item

/market/:item_id
display specific item 
purchase

add to watchlist(advanced)


