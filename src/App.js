
import './App.scss';
import { useEffect, useState } from 'react';
import Form from './Form';
import Message from './Message'

function App() {
  const [messageList, setMessageList] = useState([]);

  const updateMessageList = (text, author = 'NoName') => {
    const newMessage = { text, author };
    setMessageList((prevMessageList) => [...prevMessageList, newMessage])
  };

  useEffect(() => {
    if (
      messageList.length !== 0 &&
      messageList[messageList.length - 1].author !== 'Bot'
    ) {
      setTimeout(() => {
        updateMessageList('Ваше сообщение прочитано', 'Bot');
      }, 1500);
    }
  }, [messageList]);

  return (
    <div className="App">
      <Message items={messageList} />
      <Form onSubmit={updateMessageList} />
    </div>
  );
}

export default App;
