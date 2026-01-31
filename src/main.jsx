import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerContextProvider from './components/PlayerContext.jsx';

import ErrorBoundary from './components/ErrorBoundary.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </ErrorBoundary>
  </StrictMode>,
)
