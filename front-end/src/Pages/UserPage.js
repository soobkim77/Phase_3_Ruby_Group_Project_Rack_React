import ItemForm from '../Components/ItemForm';


const UserPage = () => {
    return(
        <div>
            {addItem ? <ItemForm/> : null}
            <button onClick={null}>Add an Item</button>
        </div>
    )
}

export default UserPage