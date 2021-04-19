import ItemContainer from '../Container/ItemContainer'
import { Grid } from "semantic-ui-react";

const MarketPlace = (props) => {
    return (
      <Grid columns={2} divided stackable>
        <Grid.Column width="4">
          <div>
            Filters
          </div>
        </Grid.Column>
        <Grid.Column width="12" as="div">
          <ItemContainer items={props.items}/>
        </Grid.Column>
      </Grid>
    )
}

export default MarketPlace 