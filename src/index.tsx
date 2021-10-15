import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { SnackbarProvider } from 'notistack';
import { AuthProvider } from './auth-context';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <SnackbarProvider maxSnack={1}>
        <App />
      </SnackbarProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

