import { Card, Image, Icon, Button } from "semantic-ui-react";

const ItemCard = (props) => {
    return (
      <Card raised onClick={(e) => props.view(e, props.item)}>
        <Image src={props.item.imageUrl} />   
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
          <span>
            <Icon name='dollar' />
            {props.item.price} 
          </span>
          {props.myPage ? 
            <span className="ui right floated">
              <Icon name='delete' id={props.item.id} onClick={(e)=>props.remove(e, props.item)}/>
            </span>
          : 
            <span className="ui right floated">
              <Button size="mini" id={props.item.id} onClick={(e)=>props.buy(e, props.item) }>Buy Item</Button>
            </span>
        }
        </Card.Content>
      </Card>
    )
}

export default ItemCard
