import React from 'react';
import CoinPresentation from './components/CoinPresentation';
import IvoryCoinPresentation from './components/IvoryCoinPresentation';

function App() {
  return (
    <div className="w-full h-screen bg-transparent flex items-center justify-center">
      <div className="max-w-md">
        <IvoryCoinPresentation />
      </div>
    </div>
  );
}

export default App;
