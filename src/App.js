import React from 'react';
import Chatkit from '@pusher/chatkit-client'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
import './App.css';
import { tokenUrl, instanceLocator, key } from './config'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      joinableRooms: [],
      joinedRooms: [],
      roomId: null
    }
  }  
  componentDidMount() {
      const chatManager = new Chatkit.ChatManager ({
        instanceLocator,
        userId: 'Muzi',
        tokenProvider: new Chatkit.TokenProvider ({
          url: tokenUrl
        })

      })

      chatManager
        .connect()
        .then(currentUser => {
          this.currentUser = currentUser
            this.getRooms(this.currentUser)
            // this.subcribeToRoom(this.currentUser)
        })
        .catch(error => {
          console.error ('error on connecting: ', error)
        })

  }

  getRooms = (currentUser) => {
    currentUser.getJoinableRooms ()
    .then(joinableRooms => {
      this.setState ({
        joinableRooms,
        joinedRooms: this.currentUser.rooms
      })
    })
    .catch(error => console.log('error on joinableRooms: ', error))
  }

  subcribeToRoom = (roomId) => {
    this.setState({ messages: [] })
    this.currentUser.subscribeToRoomMultipart({
      roomId: roomId,
      hooks: {
        onMessage: message => {
          this.setState ({
            messages: [...this.state.messages, message],
            roomId
          })
        }
      }
    })
  }

  sendMessage = (text) => {
    this.currentUser.sendMessage({
      text,
      roomId: this.currentUser.rooms[0].id,
    })
  }
  
  render() {
    const {messages, joinableRooms,joinedRooms,roomId  } = this.state
      return (
          <div className="app">
              <RoomList roomId = {roomId} subcribeToRoom = {this.subcribeToRoom} rooms = {[...joinedRooms, ...joinableRooms]}/>
              <MessageList messages= {messages}/>
              <SendMessageForm sendMessage = {this.sendMessage} />
              <NewRoomForm />
          </div>
      );
  }
}


export default App;
