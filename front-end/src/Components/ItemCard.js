import { Card, Image } from "semantic-ui-react";

const ItemCard = (props) => {
  console.log(props.items)
    return (
      <Card raised>
        <Image src={props.item.imageUrl} />
        <Card.Content>
          <Card.Header>
              {props.item.name}
          </Card.Header>
          <Card.Description>
              Price: {props.item.price} <br />
              Condition: {props.item.condition} <br />
              Description: {props.item.description} <br />
          </Card.Description>
        </Card.Content>
      </Card>
    )
}

export default ItemCard