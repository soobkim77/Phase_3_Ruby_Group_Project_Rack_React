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
          <h1>Filter</h1>
          <div>
            <Dropdown onChange={this.props.handleCategoryDropDown}
              placeholder='Select a Category'
              fluid
              selection
              options={categoryOptions}
            />
          </div>
          <div>
              User:
              <input onInput={this.handleChange} type="text" placeholder="search by name"></input>
              <button onClick={() => this.props.handleUserFilter(this.state.input)}>Search </button>
          </div>
      </div>
    ) 
  }

}

// const FilterBar = (props) => {
//     return (
//         <div>
//             <h1>Filter</h1>
//             <div>
//               <Dropdown onChange={props.handleDropDown}
//                 placeholder='Select a Category'
//                 fluid
//                 selection
//                 options={categoryOptions}
//               />
//             </div>
//             <div>
//                 User:
//                 <input type="text" placeholder="search by username"></input>
//                 <button>Search </button>
//             </div>
//         </div>
//     ) 
// }

export default FilterBar