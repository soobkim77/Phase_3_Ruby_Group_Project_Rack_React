import { Card, Image, Icon } from "semantic-ui-react";

const ItemCard = (props) => {
    return (
      // <Card raised onClick={(e) => props.view(e, props.item)}>
      //   <Image src={props.item.imageUrl} />
      //   <Card.Content>
      //     <Card.Header>
      //         {props.item.name}
      //     </Card.Header>
      //     <Card.Description>
      //         Price: {props.item.price} <br />
      //         Condition: {props.item.condition} <br />
      //         Description: {props.item.description} <br />
      //         Category: {props.item.category} <br />
      //     </Card.Description>
      //     {props.myPage ? <button 
      //               className="userRmvBtn" 
      //               id={props.item.id} 
      //               onClick={()=>props.remove(props.item)}>x</button> : null}
      //   </Card.Content>
      // </Card>
      <Card raised onClick={(e) => props.view(e, props.item)}>
        <Image src={props.item.imageUrl} />
        <Card.Content>
          <Card.Header>
              {props.item.name}
          </Card.Header>
        </Card.Content>
        <Card.Content>
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