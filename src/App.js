import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Twittes from './Components/Twittes';
 function App() {
  return (
    <div className="twitter">
      <Sidebar />
      <Twittes/>
    </div>
  )
}
export default App;