import React from 'react'

class Button extends React.Component{
    render() {
        return(
            <div>
            <button type={this.props.submit} onClick={this.props.onClick}>Login</button>
            </div>
        )
    }
}

export default Button;