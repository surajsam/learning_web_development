import React  from 'react';
import LoginForm from "./component/LoginForm";
import SignUp from "./component/rigester";
import {BrowserRouter , Route}from "react-router-dom";

class App  extends React.Component{

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h2>Welcome to React Router Tutorial</h2>

                    <Route path= "/login" component={LoginForm} />
                    <Route path= "/register" component={SignUp} />

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li> <a href={'/login'}> Login</a>   </li>
                            <li> <a href={'/register'}> Register</a>  </li>
                            <li> <a href={'/user'}> user</a>  </li>
                       </ul>
                    </nav>
                </div>
            </BrowserRouter>
        )
    }

}

export default App;
