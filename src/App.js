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
import Writing from './components/Writing';
import FileNotFound from './components/FileNotFound';
import WebDev from './components/WebDev';




//import styles
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
             <div className="container">
                 <Header />
                 <Switch>
                   <Route exact path="/" component={Home} />
                   <Route path="/about" render={ () => <About title="About" /> } />
                   <Route path="/webdev" component={WebDev} />
                   <Route path="/writing" component={Writing} />
                   <Route component={FileNotFound} />
                 </Switch>
             </div>
        </div>
      </BrowserRouter>

      // end app
    );
  }
}

export default App;
