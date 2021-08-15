import React from 'react';
import LoginPage from "./components/LoginPage";
import RegisterPage from './components/RegisterPage ';
import './App.css';
import { BrowserRouter as Switch, Route, Router } from 'react-router-dom';

function App() {
  return (
    <RegisterPage/>
 //   <Router>
   // <Switch>
     // <Route exact path = "/"><LoginPage/></Route>
     // <Route path = "/sign up"><RegisterPage/></Route>
    //</Switch>
  //</Router>
);
}

export default App;
