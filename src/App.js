import React,{ Component } from 'react';
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import store from './redux'
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './screens/Home';
import Admin from './screens/Admin';



const Login = () => <h1>Login</h1>
const Restrito = () => <h1>Restrito</h1>


class App extends Component{

  // async componentDidMount(){
  //   let Htoken = localStorage.getItem('@token-runing')

  //   if(!Htoken){
  //     const { data:{ token }} = await axios.post('http://localhost:3001/users/login',{
  //       email:"tuliofaria@devpleno.com",
  //       passwd:"abc123"
  //     })
  //     Htoken = token
  //     localStorage.setItem('@token-runing',token)
  //     console.log('Passou no Login')
  //   }
  //     const decoded = jwtDecode(Htoken)
  //     console.log(decoded)

  //     const users = await axios.get('http://localhost:3001/users/me',{
  //       headers:{
  //         Authorization:`Bearer ${Htoken}`
  //       }
  //     })
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
                <Route path="/restrito" component={Restrito}/>
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
