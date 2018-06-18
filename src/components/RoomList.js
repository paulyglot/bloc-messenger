import React, {Component} from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      nameNewRoom: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

componentDidMount() {
	this.roomsRef.on('child_added', snapshot => {
	const room = snapshot.val();    
  this.setState({ rooms: this.state.rooms.concat( room ) });
  	});
}

handleChange(e) {
  this.setState({nameNewRoom: e.target.value});
}

handleRoomSubmit(e){
  e.preventDefault();
  if (this.state.nameNewRoom) {
    this.setState({nameNewRoom: ''});
    this.roomsRef.push({name: this.state.nameNewRoom,});
  }
}

render() {
    return (
      <section className="roomCreation">
         <section id="room-submit">
           <form onSubmit={ (e) => this.handleRoomSubmit(e)}>
              <label for="createChatRoom">Create New Room </label>
              <input 
                type="text" 
                value={this.state.nameNewRoom}
                placeholder="enter room name"
                onChange={this.handleChange.bind(this)}
                />
              <input 
                type="submit"
                value="submit"
                />
           </form>
         </section>
         <section id="room-list">
           {this.state.rooms.map ((room, index) =>
             <li key={index} onClick={() => this.props.setRoom(room)}>{room.name}</li> 
             )
           }
         </section>
       </section>
    );
  }
}

export default RoomList;