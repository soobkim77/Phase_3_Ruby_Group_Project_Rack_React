import React from 'react';
import ItemForm from '../Components/ItemForm';
import ItemContainer from '../Container/ItemContainer';

class UserPage extends React.Component{

    state = {
        myPage: true
    }

    render(){
        return(
            <div>
                <div>
                    { this.props.addItem ? <ItemForm handleSubmit={this.props.handleSubmit}/> : null }
                    <button onClick={this.props.handleClick}>Add an Item</button>
                </div>
                <div>
                    <ItemContainer myPage={this.state.myPage} remove={this.props.remove} items={this.props.items}/>
                </div>
            </div>
        )
    }
}

export default UserPage