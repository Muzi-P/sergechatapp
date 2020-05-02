import React from 'react'
import Message from './Message';

class MessageList extends React.Component {
    render() {
        const {messages} = this.props;
        return (
            <div className="message-list">
                {messages && messages.map((message, index) => {
                    return (
                        <Message 
                            key = {message.id} 
                            username = {message.senderFirstName} 
                            text = {message.message}
                            sentAt = {message.sentAt}
                            />
                    )
                })}
            </div>
        )
    }
}




export default MessageList