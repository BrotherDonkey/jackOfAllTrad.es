import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


//import app components
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Novels from './components/Novels';


//import styles
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
             <div className="container">
                 <Header />
                   <Route exact path="/" component={Home} />
                   <Route path="/about" render={ () => <About /> } />
                   <Route path="/novels" component={Novels} />
             </div>
        </div>
      </BrowserRouter>

      // end app
    );
  }
}

export default App;
