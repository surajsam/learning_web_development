import React from 'react';
import LoginForm from "./component/LoginForm";

class App  extends React.Component{
    constructor(props) {
        super(props)
        this.state = {};
    }
    render() {
        return <LoginForm/>
    }
}

export default App;
