const LogIn = (props) => {
    return(
        <div>
                <div>
                    {props.log ? "Create a User" : "Log-In"}
                </div>
                <form  onSubmit={props.handleLogin}>

                    <div >
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            value={props.user.username}
                            onChange={props.handleUsernameChange}
                            name="username"
                            placeholder="Username"
                            autoComplete="off"
                            />
                    </div>

                    <div >
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            value={props.user.password}
                            onChange={props.handlePasswordChange}
                            name="password"
                            
                            placeholder="Password"
                            autoComplete="off"
                            />
                    </div>

                    <button  type="submit"  value="submit">{props.log ? "Create a User" : "Log-In"}</button>
                </form>
        </div>
    )
}

export default LogIn