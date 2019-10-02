import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName : '' ,
            password : '' ,
            message : ''
        }
    }

    userNameHandler = event => {
        this.setState({
            userName: event.target.value
        })
    }

    passwordHandler = event => {
        this.setState({
            password: event.target.value
        })
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
            <form onSubmit={this.loginHandler}>
                <div>
                    <input id={'userName'} type={'text'} value={this.state.userName} onChange={this.userNameHandler}/>
                </div>
                <div>
                    <input id={'password'} type={'password'} value={this.state.password} onChange={this.passwordHandler}/>
                </div>
                <div>
                    <button id={'submitButton'} type={'submit'} onChange={this.loginHandler}>Login</button>
                    <div>
                        <p> {this.state.message} </p>
                    </div>
                </div>
            </form>
        )

    }
}

export default LoginForm;