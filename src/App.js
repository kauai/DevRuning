import React,{ Component } from 'react';
import axios from 'axios'
import store from './redux'
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './screens/Home';
import Admin from './screens/Admin';
import Login from './screens/Login';


class App extends Component{

  // async componentDidMount(){
  
  //     console.log('GET-USERS',users.data)

  // }  

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
                <Route path="/" exact component={Home}/>
                <Route path="/admin" component={Admin}/>
                {/* <Route path="/restrito" component={Restrito}/> */}
                <Route path="/login" component={Login}/>
                <Header/>
            </header>
          </div>
        </Router>
    </Provider>
    )
  }
}

export default App;
