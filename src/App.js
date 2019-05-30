import React,{ Component } from 'react';
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import store from './redux'
import { Provider } from 'react-redux'

import logo from './logo.svg';
import './App.css';

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

  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            
          </header>
        </div>
    </Provider>
    )
  }
}

export default App;
