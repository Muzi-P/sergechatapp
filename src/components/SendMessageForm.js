import React from 'react'

class SendMessageForm extends React.Component {
    constructor () {
        super()
        this.state = {
            message : ''
        }
    }

    handleChange = (e) => {
        this.setState ({
            message:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState ({
            message: ''
        })
    }
    render() {
        const {message} = this.state
        return (
            <form 
                onSubmit={this.handleSubmit}
                className="send-message-form">
                <input
                    onChange = {this.handleChange}
                    value={message}
                    placeholder="Type a message"
                    type="text" />
            </form>
        )
    }
}

export default SendMessageForm