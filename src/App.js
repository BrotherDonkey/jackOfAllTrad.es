import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';





//import app components
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Writing from './components/Writing';
import FileNotFound from './components/FileNotFound';
import WebDev2 from './components/WebDev2';





//import styles
import 'normalize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
             <div className="outer-cont">
                 <Header />
                 <div className="content-cont">
                   <Switch>
                     <Route exact path="/" component={Home} />
                     <Route path="/about" component={About} />
                     <Route path="/webdev" component={WebDev2} />
                     <Route path="/writing" component={Writing} />
                     <Route component={FileNotFound} />
                   </Switch>
                 </div>
                 <Footer />
             </div>
        </div>
      </BrowserRouter>

      // end app
    );
  }
}

export default App;
