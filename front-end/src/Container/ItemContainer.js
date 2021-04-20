import ItemCard from '../Components/ItemCard';
import "semantic-ui-css/semantic.min.css";
import ItemSpecs from '../Components/ItemSpecs';

const ItemContainer = (props) => {
    return (
      <div className="ui four stackable cards">
        {props.items.map((itemData, index) => <ItemCard item={itemData} key={index} />)}
      </div>
    );

}

export default ItemContainer