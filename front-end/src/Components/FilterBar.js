import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const categoryOptions = [
  {
    key: 'clothing',
    text: 'Clothing',
    value: 'clothing'
  },
  {
    key: 'shoes',
    text: 'Shoes',
    value: 'shoes'
  },
  {
    key: 'accesories',
    text: 'Accesories',
    value: 'accesories'
  },
  {
    key: 'all',
    text: 'All',
    value: 'all'
  }
]

class FilterBar extends React.Component {

  state={
    input: ""
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div>
          <h1>Filters</h1>
          <div className="ui icon input">
            <input onInput={this.handleChange} type="text" placeholder="Search..."/>
            <i aria-hidden="true" className="search circular link icon" onClick={() => this.props.handleUserFilter(this.state.input)}></i>
          </div>
          <div>
            <Dropdown onChange={this.props.handleCategoryDropDown} placeholder='Select a Category' search selection options={categoryOptions} />  
          </div>
      </div>
    ) 
  }

}

export default FilterBar