import React from 'react';

class Message extends React.Component {
    constructor() {
        super()
        this.state = {
          time: ''
        }
      }
    formatCreatedAt = () => {
        var date = new Date(this.props.createdAt);
        var time = `${date.getHours()}:${this.formatMinutes(date.getMinutes())}`
        return  time
    }

    formatMinutes = (minutes) => {
        if (minutes < 10) minutes = `0${minutes}`
        return minutes
    }

    render (){
        const {username, text} = this.props
    return (
        <div className="message">
            <div className="message-username">{username}</div>
            <div className="message-text" >{text}</div>
            {/* <div className="message-time" >{this.formatCreatedAt()}</div> */}
        </div>
    )
    }
}

export default Message