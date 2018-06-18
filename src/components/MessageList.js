import React, {Component} from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      nameNewMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.messagesRef = this.props.firebase.database().ref('messages');
  }

componentDidMount() {
  this.messagesRef.on('child_added', snapshot => {
  const chat = snapshot.val();    
  this.setState({ messages: this.state.messages.concat( chat ) });
    });
}

handleMessageSubmit(e){
  e.preventDefault();
  if (this.state.nameNewMessage) {
    this.setState({nameNewMessage: ''});
    this.messagesRef.push({message: this.state.nameNewMessage,});
  }
}

handleChange(e) {
  this.setState({nameNewMessage: e.target.value});
}

render() {
    return (
      <section className="messageCreation">
         <section id="message-submit">
           <form onSubmit={ (e) => this.handleMessageSubmit(e)}>
              <input 
                type="text" 
                value={this.state.nameNewMessage}
                placeholder="enter your message"
                onChange={this.handleChange.bind(this)}
                />
              <input 
                type="submit"
                value="submit"
                />
           </form>
         </section>
         <section id="message-list">
           {this.state.messages.map ((chat, index) => 
             <li key={index}>
               {chat.message}
             </li> 
             )
           }
         </section>
       </section>
    );
  }
}

export default MessageList;