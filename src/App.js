
import React, {
  useEffect,
  useState,
} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import './App.scss';
import Form from './Form';
import Message from './Message';
import { AUTHORS } from './constants';
import ChatsList from './ChatsList';
import Theme from './Theme';

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
    <ThemeProvider theme={Theme}>
      <div className="App">
        <div className="chats">
          <ChatsList />
        </div>
        <div className="messages">
          <Message items={messageList} />
          <Form onSubmit={updateMessageList} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
