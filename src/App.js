import React from 'react';
import './App.css';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <div className="App">
      <div class="blur-overlay"></div> {/* corregido: class -> className */}
      <SocialIcons />

    </div>
    
  );
}

export default App;
