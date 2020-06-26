import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';  
import MainPage from './Components/MainPage'
import ToyDetails from './Components/ToyDetails'
import './App.css';


export default class App extends React.Component{

  render()
  {

    return(
        <Router>
          <Route exact path = "/" component={MainPage} />
          <Route exact path = "/details" component={ToyDetails} />
        </Router>
    )

  }
}

