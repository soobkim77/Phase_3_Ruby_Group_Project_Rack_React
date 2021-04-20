import React from 'react';

const ItemForm = (props) => {
    return (
        <div className="container">
            <form  onSubmit={props.handleSubmit}>
                <h3>Create a toy!</h3>
                <input type="text" name="name" placeholder="Enter item name..."/>
                <br/>
                <input type="text" name="image" placeholder="Enter item's image URL..."/>
                <br/>
                <input type="text" name="seller" placeholder="Enter seller name..."/>
                <br/>
                <input type="text" name="category" placeholder="Enter item's category..."/>
                <br/>
                <input type="text" name="description" placeholder="Enter item description..."/>
                <br/>
                <input type="text" name="price" placeholder="Enter item price..."/>
                <br/>
                <input type="text" name="condition" placeholder="Enter item condition..."/>
                <br/>
                <input type="submit" name="submit" value="Create New Item"  />
            </form>
        </div>
    )
}

export default ItemForm