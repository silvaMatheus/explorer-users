import React from 'react';
// import { api } from "./services/api";
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import { UsersProvider } from './reposContext';
import { Routes } from './routes/routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <UsersProvider>
        <Header />
        <Routes />
        <GlobalStyle />
      </UsersProvider>
    </BrowserRouter>
  );
}

export default App;
