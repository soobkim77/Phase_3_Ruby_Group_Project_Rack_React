import React from 'react';
import ItemForm from '../Components/ItemForm';
import ItemContainer from '../Container/ItemContainer';
import ItemSpecs from '../Components/ItemSpecs';

class UserPage extends React.Component{

    state = {
        myPage: true,
        view: true
    }



    render(){
        return(
            <div>
                <div>
                    { this.props.addItem ? <ItemForm handleSubmit={this.props.handleSubmit}/> : null }
                    <button onClick={this.props.handleClick}>Add an Item</button>
                </div>
                <div>
                    {this.props.itemView ? <ItemSpecs item={this.props.item} goBack={null}/> : <ItemContainer myPage={this.state.myPage} remove={this.props.remove} items={this.props.items} view={this.props.view} myView={this.state.view}/>}
                </div>
            </div>
        )
    }
}

export default UserPage