import React from 'react';
import Header from './pages/Header';
import Sidebar from './pages/Sidebar';
import Calendar from './pages/Calendar';
import GlobalStyle from './styles/GlobalStyle';
import { AppWrapper, MainContent } from './styles/AppStyles';

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header />
      <MainContent>
        <Sidebar />
        <Calendar />
      </MainContent>
    </AppWrapper>
  );
};

export default App;