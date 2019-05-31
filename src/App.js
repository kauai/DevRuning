import React,{ Component } from 'react';
import store from './redux'
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './screens/Home';
import Admin from './screens/Admin';
import Login from './screens/Login';
import Restrito from './screens/Restrito'
import { Container } from 'semantic-ui-react'

class App extends Component{

  // async componentDidMount(){
  
  //     console.log('GET-USERS',users.data)

  // }  

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <header className="App-header">
                <Route path="/" exact component={Home}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/restrito" component={Restrito}/>
                <Route path="/login" component={Login}/>
            </header>
          </Container>
        </Router>
    </Provider>
    )
  }
}

export default App;
