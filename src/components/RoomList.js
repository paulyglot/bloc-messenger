import React, {Component} from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      nameNewRoom: ''
    };

    this.handleRoomSubmit = this.handleRoomSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

createRoom(nameNewRoom){
  this.roomsRef.push({
    name: this.state.nameNewRoom
  });
}

componentDidMount() {
	this.roomsRef.on('child_added', snapshot => {
	const room = snapshot.val(); 
  room.key = snapshot.key;   
  this.setState({ rooms: this.state.rooms.concat( room ) });
  console.log(this.state.rooms);
  	});
}

handleChange(e) {
  this.setState({nameNewRoom: e.target.value});
}

handleRoomSubmit(e){
<<<<<<< HEAD
  e.preventDefault();
  if (this.state.nameNewRoom) {
    this.setState({nameNewRoom: ''});
    this.roomsRef.push({name: this.state.nameNewRoom,});
  }
=======
  this.createRoom();
  e.preventDefault();
  this.setState({nameNewRoom: ''});
>>>>>>> blocMessenger-listMessages
}

render() {
    return (
      <div id="room-list">
         { this.state.rooms.map ( (room, index) => (<li key={index} onClick={() => this.props.setRoom(room)}>{ room.name }</li>)
           )}         
         <form onSubmit={this.handleRoomSubmit}>
            <input type="text" value={this.state.nameNewRoom} placeholder="enter room name" onChange={this.handleChange} />
            <input type="submit" value="submit" />
         </form>
      </div>
    );
  }
}

export default RoomList;