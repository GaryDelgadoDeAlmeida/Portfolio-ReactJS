import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from './components/RoutesConfig';
import './styles/index.scss';

function App() {
  return (
    <BrowserRouter>
        <RoutesConfig />
    </BrowserRouter>
  );
}

export default App;
