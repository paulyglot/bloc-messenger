import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"
// Initialize Firebase
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Bloc Messenger</h1>
        </header>
        <main>
          <Route path="/roomlist" component={RoomList} />
        </main>
      </div>
    );
  }
}

export default App;
