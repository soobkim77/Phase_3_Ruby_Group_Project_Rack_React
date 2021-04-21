import React from 'react';

class EditItem extends React.Component{
    // state = {
    //     name: this.props.item.name,
    //     image: this.props.item.image_url,
    //     seller: this.props.item.seller_id,
    //     category: this.props.item.category_id,
    //     description: this.props.item.description,
    //     price: this.props.item.price,
    //     condition: this.props.item.condition
    // }

    // nameChange = (e) => {
    //     this.setState({
    //         name: e.target.value
    //     })
    // }

    // nameChange = (e) => {
    //     this.setState({
    //         name: e.target.value
    //     })
    // }

    render() {
        return(
        <form className="note-editor" onSubmit={(e) => this.props.handleSaveEdit (e, this.props.item)}>
        <input type="text" name="name" placeholder={this.props.item.name} />
        <br/>
        <input type="text" name="image" placeholder={this.props.item.imageUrl} />
        <br />
        <input type="text" name="category" placeholder={this.props.item.category} />
        <br />
        <input type="text" name="description" placeholder={this.props.item.description} />
        <br />
        <input type="text" name="price" placeholder={this.props.item.price} />
        <br />
        <input type="text" name="condition" placeholder={this.props.item.condition} />
        <br />
        <div className="button-row">
          <input className="button" type="submit" value="Save"  />
          <button type="button" onClick={this.props.cancelEdit}>Cancel</button>
        </div>
      </form>
    )}
}

export default EditItem