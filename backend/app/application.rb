class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/items/) && req.get?

      items = Item.all.map do |i|
        {id: i.id, name: i.name, category: i.category.name, seller: i.seller, imageUrl: i.image_url, description: i.description, price: i.price, condition: i.condition}
      end
      return [200, { 'Content-Type' => 'application/json' }, [ {:items => items}.to_json ]]

    elsif req.path.match(/users/) && req.get?
      users = User.all.map do |u|
        {id: u.id, username: u.name, password: u.password}
      end
      return [200, { 'Content-Type' => 'application/json' }, [ {:users => users}.to_json ]]

    end

    resp.finish
  end

end
