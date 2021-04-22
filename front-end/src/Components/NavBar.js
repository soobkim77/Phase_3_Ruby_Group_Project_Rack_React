import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class NavBar extends React.Component {
  state = { activeItem: 'marketplace'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const {activeItem} = this.state

    return (
      <Menu secondary>
        <Menu.Item as={NavLink} active={activeItem === 'my page'} name="My Page" to={`/users/${this.props.user.id}`} onClick={this.handleItemClick}/>
        <Menu.Item as={NavLink} active={activeItem === 'market place'} name="Market Place" to={`/marketplace`} onClick={this.handleItemClick}/>
        <Menu.Menu position='right'>
          <Menu.Item name='logout'active={activeItem === 'logout'} onClick={this.props.handleLogout}/>
        </Menu.Menu>
      </Menu>
    )
  }
}
  
export default NavBar
