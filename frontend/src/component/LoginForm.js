import React from 'react';
import TextField from './textField'
import Button from "./button";

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password : '' ,
            message : '' ,
            userName : ''
        }
    }

    passwordHandler = event => {
        this.setState({
            password: event.target.value
        })
    }

    userHandler = event =>  {
        this.setState(
            {userName : event.target.value}
        )
    }


    loginHandler = event => {
        event.preventDefault();
        fetch('http://localhost:8080/login',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json' },
            body : JSON.stringify({userName : this.state.userName, password : this.state.password})
        }).then(res => res.text()).then(loginStatus => {
            if(loginStatus == "true"){
                this.setState({
                    message : "Login Successfull"
                })
            }else {
                this.setState({
                    message: "Login failed"
                })
            }
        })
    }

    render() {
        return (
            <div className={'LoginForm'}>
                <TextField id={'username'} type={'text'} value={this.state.userName} onChange={this.userHandler}/>
                <TextField id={'password'} type={'password'} value={this.state.password} onChange={this.passwordHandler}/>
                <Button  type={'submit'} onClick={this.loginHandler}/>
                <p> {this.state.message} </p>
            </div>
        )
    }
}

export default LoginForm;