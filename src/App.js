
import './App.scss';
import { useEffect, useState } from 'react';
import Form from './Form';
import Message from './Message'
import Button from './Button'


function App() {
  const [messageList, setMessageList] = useState([{ text: 'text', author: 'NoName' }, { text: 'text', author: 'Bot' }]);

  const [value, setValue] = useState('');


  const updateMessageList = () => {
    setMessageList(prevMessageList => prevMessageList.push())
  }

  return (
    <div className="App">
      <Message items={messageList} />
      <Form value={value} />
      <Button onClick={updateMessageList} />
    </div>
  );
}

export default App;
