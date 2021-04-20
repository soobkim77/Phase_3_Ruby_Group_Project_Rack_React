import { NavLink } from "react-router-dom";


const NavBar = (props) => {
  
      return (
        <div style={{ borderBottom: "2px solid black", paddingBottom: "10px", marginBottom: "12px" }} className="navbar">
            <NavLink style={{ marginRight: "10px" }} to={`/users/${props.user.id}`}>
                My Page
            </NavLink>
            <NavLink style={{ marginRight: "10px" }} to="/marketplace">
                Marketplace
            </NavLink>
            <button onClick={props.logout} className="logout">LogOut</button>
        </div>
        )

    }


export default NavBar