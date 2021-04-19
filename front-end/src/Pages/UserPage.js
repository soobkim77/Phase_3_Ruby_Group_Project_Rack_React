import React from 'react';
import ItemForm from '../Components/ItemForm';
import ItemContainer from '../Container/ItemContainer';


const UserPage = (props) => {
    return(
        <div>
            <div>
                { props.addItem ? <ItemForm handleSubmit={props.handleSubmit}/> : null }
                <button onClick={props.handleClick}>Add an Item</button>
            </div>
            <div>
                <ItemContainer items={props.items}/>
            </div>
        </div>
    )
}

export default UserPage