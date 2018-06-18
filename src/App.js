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
  render() {
    return (
      <section>
        <div className="App">
          <header className="App-header">
            <nav>
              <h1 className="site-header">Welcome to Bloc Messenger</h1>
            </nav>
          </header>        
            <RoomList firebase={firebase} />
            
        </div>    
        <MessageList firebase={firebase} />    
      </section>
    );
  }
}

export default App;
