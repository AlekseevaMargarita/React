
import React from 'react';
import './App.scss';
import { useEffect, useState } from 'react';
import Form from './Form';
import Message from './Message'
import { AUTHORS } from './constants';

function App() {
  const [messageList, setMessageList] = useState([]);

  const updateMessageList = (text, author = AUTHORS.NONAME) => {
    const newMessage = { text, author };
    setMessageList((prevMessageList) => [...prevMessageList, newMessage])
  };

  useEffect(() => {
    let timerId;
    if (
      messageList.length !== 0 &&
      messageList[messageList.length - 1].author !== AUTHORS.BOT
    ) {
      timerId = setTimeout(() => {
        updateMessageList('Ваше сообщение прочитано', AUTHORS.BOT);
      }, 1500);
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [messageList]);

  return (
    <div className="App">
      <Message items={messageList} />
      <Form onSubmit={updateMessageList} />
    </div>
  );
}

export default App;
