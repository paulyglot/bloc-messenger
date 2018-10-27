import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

var config = {
  apiKey: "AIzaSyBBeLEmQzCshkRKvpMzF1FztNpd6k0Dz-U",
  authDomain: "my-messenger-4892d.firebaseapp.com",
  databaseURL: "https://my-messenger-4892d.firebaseio.com",
  projectId: "my-messenger-4892d",
  storageBucket: "my-messenger-4892d.appspot.com",
  messagingSenderId: "740142571636"
};

firebase.initializeApp(config);

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      activeRoom: '',
      activeMessage: '',
      activeUser: ''
    };

  this.setRoom = this.setRoom.bind(this);
  this.setMessage = this.setMessage.bind(this);
  this.setUser = this.setUser.bind(this);
  };

  setRoom(room) {
    this.setState({ activeRoom: room });
    console.log(this.state.activeRoom)
  }

  setUser(user) {
    this.setState({ activeUser: user })
  }

  setMessage(message) {
    this.setState({ activeMessage: message })
  }

  render() {
    return (
      <section>
        <nav>
          <h2 className="App-header">Quick Chat</h2>
          <User className="user-header" firebase={ firebase } setUser={this.setUser} user={ this.state.activeUser } />
        </nav>
        { this.state.activeUser ? 
          <div className="container">
            <RoomList firebase={firebase} activeRoom={ this.state.activeRoom } setRoom={this.setRoom} />
            <MessageList firebase={ firebase } setUser={this.setUser} user={this.state.activeUser} activeRoom={this.state.activeRoom} setMessage={this.setMessage} />
          </div>
        : null }
      </section>
    );
  }
}

export default App;
