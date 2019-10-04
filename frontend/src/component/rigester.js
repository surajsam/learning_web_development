import React from 'react'
import TextField from "./textField";

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName : '',
            surName : '',
            email : '',
            password : ''
        }
    }

    firstNameHandler = event =>  {
        this.setState(
            {   firstName : event.target.value }
        )
    }

    surNameHandler = event =>  {
        this.setState(
            {surName : event.target.value}
        )
    }

    emailHandler = event =>  {
        this.setState(
            {email : event.target.value}
        )
    }

    passwordHandler = event =>  {
        this.setState(
            {password : event.target.value}
        )
    }

    render() {
        return (
            <div className={'SignUP'}>

                <TextField id={'FirstName'} type ={'text'} value={this.state.firstName} onChange={this.firstNameHandler} />

                <TextField id={"surName"} type={'text'} value={this.state.surName} onChange={this.surNameHandler} />

                <TextField id={'emailId'} type ={'text'} value={this.state.email} onChange={this.emailHandler}/>

                <TextField id={"password"} type={'password'} value={this.state.password} onChange={this.passwordHandler}/>
                </div>
        )
    }
}

export default SignUp;
