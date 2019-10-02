import React from 'react'

class  TextField extends React.Component{

    render() {
        return (
            <div>
            <input
                id={this.props.id}
                type={this.props.type}
                value={this.props.value}
                onChange={this.props.onChange}
            />
            </div>
        )
    }
}
export default TextField;