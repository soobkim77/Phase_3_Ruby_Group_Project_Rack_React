import ItemCard from '../Components/ItemCard';
import "semantic-ui-css/semantic.min.css";
import ItemSpecs from '../Components/ItemSpecs';

const ItemContainer = (props) => {
    return (
      <div className="ui four stackable cards">
        {props.items.map((itemData, index) => <ItemCard remove={props.remove} myPage={props.myPage} view={props.myView ? props.view : null}  item={itemData} key={index}/>)}
      </div>
    );

}

export default ItemContainer