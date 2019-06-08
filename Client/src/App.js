import React,{Component} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './Components/Layout/Navbar';
import Slider from './Components/Layout/Slider';
import CardComponent from './Components/Layout/Card';
import Footer from './Components/Layout/Footer';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Register from "./auth/register";
import Login from "./auth/Login";
import About from "./Components/Navcomponents/About";
import Contact from "./Components/Navcomponents/contact";

class App extends Component {

  componentDidMount()
  {

  };

  render() {
    return (
        <Router>
        <div className="App">
        <Navbar/>
            <Route exact path="/" component={Slider}/>
            <div className="container">
                <Route exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
            </div>
            <Route exact path="/" component={CardComponent}/>
            <Footer/>
        </div>
        </Router>
    );
  }
}
export default App;
