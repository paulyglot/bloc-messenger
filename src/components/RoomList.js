import React, {Component} from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
  	this.roomsRef.on('child_added', snapshot => {
  	const room = snapshot.val();    
    this.setState({ rooms: this.state.rooms.concat( room ) });
    	});
  }

createRoom(){
  this.roomsRef.push({
  name: newRoomName //new room name is input text in Form 
 });
}

render() {
    return (
      <section className='roomlist'>
	       {this.state.rooms.map ((room, index) => 
	         <li key={index}>
	           {room.name}
	         </li> 
           )
         }
       </section>
       <div className='create-room-form'>
        <form action="" method="post">
          <fieldset>
            <input type="text" id="createChatRoom">
            <label for="createChatRoom">New Room</label>
            <input type="submit" value="Submit"> 
          </fieldset>
        </form>
       </div>
    );
  }
}

export default RoomList;