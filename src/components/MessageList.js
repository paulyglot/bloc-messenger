import React, {Component} from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      nameNewMessage: ''
    };

    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.createMessage = this.createMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.messagesRef = this.props.firebase.database().ref('messages');
  }

createMessage(){
    this.messagesRef.push({
      content: this.state.nameNewMessage,
      roomId: this.props.activeRoom.key,
      username: this.props.user.displayName,
  });
}

componentDidMount() {
  this.messagesRef.on('child_added', snapshot => {
  const message = snapshot.val();
  message.key = snapshot.key; 
  this.setState({ messages: this.state.messages.concat(message)});
  });
}

handleMessageSubmit(e){
  e.preventDefault();
  this.createMessage();
  this.setState({newmessage: ''});
}

handleChange(e) {
  this.setState({nameNewMessage: e.target.value});
}

render() {
    return (
      <div className='message-list'>
      <h3 className='room-name'>{ this.props.activeRoom ? this.props.activeRoom.name : 'Please select a room' }</h3>
      <ul>
        { this.state.messages.filter(message => message.roomId === this.props.activeRoom.key).map((message, index) => (<li key={index}> <b>{message.username}</b> <br /> {message.content} </li>),
      )}
      </ul>
        <form onSubmit={this.handleMessageSubmit}>
            <input value={this.state.nameNewmessage} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
    </div>
    );
  }
}

export default MessageList;