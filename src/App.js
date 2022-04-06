import React, { useState } from 'react';
import './App.scss';
import { Button } from "carbon-components-react";
import { CustomTab } from './components/CustomTab/CustomTab';
import { useDynamicSVGImport } from './utils/useDynamicSVGImport';

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const handleVisibility = () => {
    setIsVisible(!isVisible)
  }
  const gitAssetUrl = 'https://raw.githubusercontent.com/Gammaalpha/carbon-design-practice/0e64263d19067777adb4a25e38130726479d006d/src/link%20testing.svg'
  // debugger;
  return (
    <div className="App">
      <Button className="toggle-btn" onClick={handleVisibility}>TOGGLE</Button>
      {isVisible && <CustomTab />}
    </div>
  );
}

export default App;
