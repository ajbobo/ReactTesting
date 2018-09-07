'use strict';


function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    )
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false};

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin() {
        this.setState({loggedIn: true});
    }

    handleLogout() {
        this.setState({loggedIn: false});
    }


    render() {
        let button = (this.state.loggedIn ? <LogoutButton onClick={this.handleLogout}/> : <LoginButton onClick={this.handleLogin}/>);
        return (
            <div>
                <p>The user is {this.state.loggedIn ? 'currently' : 'not'} logged in.</p>
                {button}
            </div>
        );
    }
}

let domContainer = document.querySelector('#login_container');
ReactDOM.render(<LoginControl/>, domContainer);