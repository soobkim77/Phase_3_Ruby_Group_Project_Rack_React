import React from 'react';
import ItemContainer from '../Container/ItemContainer'
import FilterBar from '../Components/FilterBar'
import { Grid } from "semantic-ui-react";

class MarketPlace extends React.Component {

  state={
    categoryFilterOption: 'all',
    userFilterOption: ''
  }

  handleCategoryDropDown = (event, data) => {
    this.setState({
      categoryFilterOption: data.value
    })
  }

  handleCategoryDropDown = (event, data) => {
    this.setState({
      categoryFilterOption: data.value
    })
  }

  handleUserFilter = (userFilter) => {
    this.setState({
      userFilterOption: userFilter
    })
  }

  filterItems = () => {
    /* Category is not All & User search is blank */
    if (this.state.categoryFilterOption ===! 'all' && !this.state.userFilterOption){
      return this.props.items.filter(item => item.category === this.state.categoryFilterOption)
    
      /* Category = All & User search is blank */
    } else if (this.state.categoryFilterOption === 'all' && !this.state.userFilterOption){
      return this.props.items 
    
      /* Category = All & User search is not blank */
    } else if (this.state.categoryFilterOption === 'all' && this.state.userFilterOption){
      return this.props.items.filter(item => item.name.toLowerCase().includes(this.state.userFilterOption.toLowerCase()))
    
      /* Category is not blank & User search is not blank */
    } else {
      return this.props.items.filter(item => item.category === this.state.categoryFilterOption && item.name.toLowerCase().includes(this.state.userFilterOption.toLowerCase()))
    }
  }

  render() {
    if (!this.props.isLoggedIn)  
    return null
    else 
    return (
      <Grid columns={2} divided stackable >
        <Grid.Column width="3" >
          <FilterBar handleCategoryDropDown={this.handleCategoryDropDown} handleUserFilter={this.handleUserFilter} currentUser={this.props.currentUser} />
        </Grid.Column>
        <Grid.Column width="12">
          <ItemContainer items={this.filterItems()} buy={this.props.buy}/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default MarketPlace 