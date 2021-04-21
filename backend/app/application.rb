class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/items/) && req.get?

      items = Item.all.map do |i|
        i.format_item
      end
      return [200, { 'Content-Type' => 'application/json' }, [ {:items => items}.to_json ]]

    elsif req.path.match(/users/) && req.get?
      users = User.all.map do |u|
        {id: u.id, username: u.name}
      end
      return [200, { 'Content-Type' => 'application/json' }, [ {:users => users}.to_json ]]

    elsif req.path.match(/items/) && req.post?
            
      data = JSON.parse req.body.read
      category = Category.find_by(name: data["category"])
      seller = User.find_by(name: data["seller"])
      item = Item.create(name:data["name"], image_url: data["image"], seller_id: seller.id, category_id: category.id, description: data["description"], price: data["price"], condition: data["condition"])
      return [200, { 'Content-Type' => 'application/json' }, [item.format_item.to_json ]]
  

    elsif req.path.match(/users/) && req.post?
      data = JSON.parse req.body.read
      if !User.find_by(name: data["name"])
        user = User.create(name: data["name"], password: BCrypt::Password.create(data["password"]))
        return [200, { 'Content-Type' => 'application/json' }, [user.format_user.to_json ]]
      else 
        return [400, { 'Content-Type' => 'application/json' }, [{:message => "Username Already Taken"}.to_json ]]
      end
      elsif req.path.match(/purchases/) && req.post?
      data = JSON.parse req.body.read
      purchase = Purchase.create(item_id: data["item_id"], seller_id: data["seller_id"] , purchaser_id: data["purchaser_id"])
      Item.update(data["item_id"], seller_id: data["purchaser_id"])
      item = Item.find(data["item_id"])
      return [200, { 'Content-Type' => 'application/json' }, [{:purchase => purchase, :item => item.format_item}.to_json ]]
  

    elsif req.path.match(/items/) && req.patch?      
      data = JSON.parse req.body.read
      id = req.path.split("/items/").last
      category = Category.find_by(name: data["category"])
      Item.update(id, name:data["name"], image_url: data["image"], seller_id: data["seller"]["id"], category_id: category.id, description: data["description"], price: data["price"], condition: data["condition"])
      item = Item.find(id)
      return [200, { 'Content-Type' => 'application/json' }, [item.format_item.to_json ]]

    elsif req.path.match(/login/) && req.patch? 
      data = JSON.parse req.body.read
      user = User.find_by(name: data["name"])
      if (BCrypt::Password.new(user.password) == data["password"])
        return [200, { 'Content-Type' => 'application/json' }, [ {:message => "Successful Login", :user => user.format_user}.to_json ]]
      else
        return [400, { 'Content-Type' => 'application/json' }, [ {:message => "Incorrect username or password"}.to_json ]]
      end


    elsif req.delete?
      id = req.path.split("/items/").last
      Item.find(id).delete
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "Task deleted!"}.to_json ]]
    end
 


    resp.finish
  end

end
