import React from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
    this.roomsRef = this.props.firebase.database('https://my-messenger-4892d.firebaseio.com/').ref('rooms');
  }

componentDidMount() {
	const room = snapshot.val();
    room.key = snapshot.key;
    this.roomsRef.on('child_added', snapshot => {
    this.setState({ rooms: this.state.rooms.concat( snapshot.val() ) });
  });
}


export default RoomList;