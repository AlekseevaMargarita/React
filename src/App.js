
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import './App.scss';
import Theme from './Theme';
import Router from './pages/Router';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { CircularProgress } from '@mui/material';

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={<CircularProgress />}>
            <Router />
          </PersistGate>
        </Provider>
      </div>
    </ThemeProvider >
  );
}

export default App;
