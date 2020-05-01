import React from 'react'
import Message from './Message';
import { connect } from "react-redux";

class MessageList extends React.Component {
    render() {
        const {messages} = this.props;
        return (
            <div className="message-list">
                {messages.map((message, index) => {
                    return (
                        <Message 
                            key = {index} 
                            username = {message.senderId} 
                            text = {message.text}
                            // createdAt = {message.createdAt}
                            />
                    )
                })}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        messages: state.messages.messages
    }
}

export default connect(mapStateToProps)(MessageList)