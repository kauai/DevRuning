import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { put } from 'redux-saga/effects'
import ActionCreators from '../actionCreators'

export function* login(action) {
     let Htoken = localStorage.getItem('@token-runing')
    
     const { data:{ token,message }} = yield axios.post('http://localhost:3001/users/login',{
       email:action.email,
       passwd:action.passwd
     })

     if(token) {
        Htoken = token
        localStorage.setItem('@token-runing',token)
        const user = jwtDecode(Htoken)
        console.log('USER',user)
        localStorage.setItem('user',JSON.stringify(user))
        yield put(ActionCreators.signinSuccess( user ))
     }else{
        yield put(ActionCreators.signinFailure(message))
     }
}

export function* auth(){
  let token = localStorage.getItem('@token-runing')
  if(token){
     try{
        const user = jwtDecode(token)
           yield put(ActionCreators.authSuccess(user))
        }catch(e){
           yield put(ActionCreators.authFailure('Invalid token '))
        }

  }else{
    yield put(ActionCreators.authFailure('No token '))
  }
  console.log('check auth')
}

export function* destroyAuth(){
  localStorage.removeItem('@token-runing')
  localStorage.removeItem('user')
  yield put(ActionCreators.destroyAuthSuccess())
}