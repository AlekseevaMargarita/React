
import './App.scss';
import { useEffect, useState } from 'react';
import Form from './Form';
import Message from './Message'

function App() {
  const [messageList, setMessageList] = useState([
    { text: 'text', author: 'NoName' },
    { text: 'text', author: 'Bot' }
  ]);

  const updateMessageList = (text) => {
    const newMessage = { text, author: 'NoName' };
    setMessageList((prevMessageList) => [...prevMessageList, newMessage])
  }

  return (
    <div className="App">
      <Message items={messageList} />
      <Form onSubmit={updateMessageList} />
    </div>
  );
}

export default App;
