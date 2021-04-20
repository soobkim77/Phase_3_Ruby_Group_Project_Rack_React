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
        {id: u.id, username: u.name, password: u.password}
      end
      return [200, { 'Content-Type' => 'application/json' }, [ {:users => users}.to_json ]]

    elsif req.path.match(/items/) && req.post?
            
      data = JSON.parse req.body.read
      category = Category.find_by(name: data["category"])
      seller = User.find_by(name: data["seller"])
      item = Item.create(name:data["name"], image_url: data["image"], seller_id: seller.id, category_id: category.id, description: data["description"], price: data["price"], condition: data["condition"])
      return [200, { 'Content-Type' => 'application/json' }, [item.format_item.to_json ]]
  

    elsif req.path.match(/users/) && req.post?
      data = data = JSON.parse req.body.read
      user = User.create(name: data["name"], password: data["password"])
      return [200, { 'Content-Type' => 'application/json' }, [user.format_user.to_json ]]
  

  elsif req.delete?
    id = req.path.split("/items/").last
    Item.find(id).delete

    return [200, { 'Content-Type' => 'application/json' }, [ {:message => "Task deleted!"}.to_json ]]
  end
 


    resp.finish
  end

end
