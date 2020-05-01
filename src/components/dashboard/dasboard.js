import React, { Component } from 'react';
import RoomList from '../RoomList';
import MessageList from '../MessageList';
import SendMessageForm from '../SendMessageForm';
import NewRoomForm from '../NewRoomForm';

export class dasboard extends Component {
    render() {
        return (
            <>
                <div className="app">
                    <RoomList />
                    <MessageList />
                    <SendMessageForm />
                    <NewRoomForm />
                </div>
            </>
        )
    }
}

export default dasboard
