import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AppAuthenticated from './app-routes/AppAuthenticated';
import AppUnauthenticated from './app-routes/AppUnauthenticated';

function App() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  // const a = 0;
  
  if (userIsLoggedIn == true) {
    return (<AppAuthenticated />);
  } else {
    return (<AppUnauthenticated />)
  }

}

export default App;


 // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>