
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import './App.scss';
import Theme from './Theme';
import Router from './pages/Router';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {

  /*   useEffect(() => {
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
    }, [messageList]); */

  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Provider store={store}>
          <Router />
        </Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
