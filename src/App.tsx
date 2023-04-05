import React, { useState, useEffect } from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Menu from './components/Menu/Menu';
import Form from './components/Form/Form';
import Message from './components/Message/Message';
import { Constants } from './constants/default';



function App() {

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="App">
      <Navigation handleClick={handleClick} showMenu={showMenu} aria-haspopup />
      <Message message={showMenu ? Constants.MENU_MESSAGE : Constants.DEFAULT_MESSAGE}></Message>
      {showMenu ? <Menu /> : <Form />}
    </div>
  );
}

export default App;
