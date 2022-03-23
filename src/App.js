import React, { useState } from 'react';
import './App.scss';
import { Button } from "carbon-components-react";
import { CustomTab } from './components/CustomTab/CustomTab';

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const handleVisibility = () => {
    setIsVisible(!isVisible)
  }
  return (
    <div className="App">
      <Button onClick={handleVisibility}>TOGGLE</Button>
      {isVisible && <CustomTab />}
    </div>
  );
}

export default App;
