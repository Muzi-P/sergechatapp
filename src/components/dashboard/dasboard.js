import React, { Component } from 'react';
import RoomList from '../RoomList';
import MessageList from '../MessageList';
import SendMessageForm from '../SendMessageForm';
import NewRoomForm from '../NewRoomForm';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Navbar from '../layout/Navbar';
import { Redirect } from 'react-router-dom';

export class dasboard extends Component {
    render() {
        const { messages, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <>
                <div className="app">
                    <Navbar/>
                    <RoomList />
                    <MessageList messages = {messages} />
                    <SendMessageForm />
                    <NewRoomForm />
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.firestore.ordered.messages,
        auth: state.firebase.auth,
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'messages', orderBy: ['sentAt', 'asc']},
    ])
)(dasboard)
