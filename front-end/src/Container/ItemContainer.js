import ItemCard from '../Components/ItemCard'
import "semantic-ui-css/semantic.min.css";

const ItemContainer = (props) => {
    return (
      <div className="ui four stackable cards">
        {props.items.map((itemData, index) => <ItemCard remove={props.remove} myPage={props.myPage} item={itemData} key={index}/>)}
      </div>
       
    )
}

export default ItemContainer