import React from 'react';
import ItemContainer from '../Container/ItemContainer'
import FilterBar from '../Components/FilterBar'
import { Grid } from "semantic-ui-react";

class MarketPlace extends React.Component {

  state={
    filterOption: 'all',
  }

  handleDropDown = (event, data) => {
    console.log(data.value)
    this.setState({
      filterOption: data.value
    })
  }

  filterItems = () => {
   return this.state.filterOption === 'all' ? this.props.items : this.props.items.filter(item => item.category === this.state.filterOption)
  }

  render() {
    return (
      <Grid columns={2} divided stackable>
        <Grid.Column width="4">
          <FilterBar handleDropDown={this.handleDropDown}/>
        </Grid.Column>
        <Grid.Column width="12" as="div">
          <ItemContainer items={this.filterItems()}/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default MarketPlace 