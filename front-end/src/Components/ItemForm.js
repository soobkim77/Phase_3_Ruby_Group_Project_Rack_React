const ItemForm = () => {
    return (
        <div className="container">
            <form  onSubmit={null}>
                <h3>Create a toy!</h3>
                <input type="text" name="name" placeholder="Enter item name..."/>
                <br/>
                <input type="text" name="image" placeholder="Enter item's image URL..."/>
                <br/>
                <input type="text" name="price" placeholder="Enter item price"/>
                <input type="submit" name="submit" value="Create New Item"  />
            </form>
        </div>
    )
}