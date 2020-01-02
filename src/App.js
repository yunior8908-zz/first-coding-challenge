import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HeaderComponent from './components/headerComponent';
import MainComponent from './components/mainComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderComponent />
        <div className="container">
          <React.Suspense fallback={(
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
)}
          >
            <MainComponent />
          </React.Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
