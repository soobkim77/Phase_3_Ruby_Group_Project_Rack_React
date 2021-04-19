import React from 'react';
import ItemForm from '../Components/ItemForm';


const UserPage = (props) => {
    return(
        <div>
            { props.addItem ? <ItemForm handleSubmit={props.handleSubmit}/> : null }
            <button onClick={props.handleClick}>Add an Item</button>
        </div>
    )
}

export default UserPage