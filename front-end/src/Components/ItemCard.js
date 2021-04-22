import { Card, Image, Icon, Button } from "semantic-ui-react";

const ItemCard = (props) => {
    return (

      <Card raised onClick={(e) => props.view(e, props.item)} className="card-size" style={{width: "325px"}}>
        <Image src={props.item.imageUrl} className="card-image"/>
        <Card.Content> 
          <Card.Header>
              {props.item.name}
          </Card.Header>
          <Card.Description>
              <strong>About this item</strong><br />
              {props.item.description}
          </Card.Description> <br />   
          <Card.Meta >
          <strong>Category:</strong> {props.item.category}<br />  
          <strong>Condition:</strong> {props.item.condition}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='dollar' />
            {props.item.price} 
          </a>
          {props.myPage ? 
            <a className="ui right floated">
              <Icon name='delete' id={props.item.id} onClick={()=>props.remove(props.item)}/>
            </a>
          : 
            null}
        </Card.Content>
      </Card>
    )
}

export default ItemCard
