import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Sidebar } from '../../components/Sidebar';
import { TopBar } from '../../components/TopBar';
import { ServicesPage } from '../../pages/ServicesPage';
import { AppWrapper, AppContainer } from './App.style';

function App() {
  return (
    <AppWrapper>
      <Sidebar />
      <AppContainer>
        <TopBar />
        <main>
          <ServicesPage />
        </main>
      </AppContainer>
      <ToastContainer />
    </AppWrapper>
  );
}

export default App;
