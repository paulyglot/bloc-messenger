import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

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
      activeRoom: ''};

  this.setRoom = this.setRoom.bind(this);
  };

  setRoom(room) {
    this.setState({ activeRoom: room });
    console.log(this.state.activeRoom)
  }

  render() {
    return (
      <section>
        <nav>
          <h1>Bloc Messenger</h1>
        </nav>
          <div className="container">
            <RoomList firebase={firebase} activeRoom={ this.state.activeRoom } setRoom={this.setRoom} />
            <MessageList firebase={ firebase } activeRoom={ this.state.activeRoom } />
          </div>
      </section>
    );
  }
}

export default App;
