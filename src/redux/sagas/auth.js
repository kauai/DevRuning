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
      //   const user = jwtDecode(token)
           const user = yield axios.get('http://localhost:3001/users/me',{
            headers:{
               Authorization:`Bearer ${localStorage.getItem('@token-runing')}`
            }
           })
           console.log('USER',user.data)
           yield put(ActionCreators.authSuccess(user.data))
        }catch(e){
           yield put(ActionCreators.authFailure('Invalid token '))
        }

  }else{
    yield put(ActionCreators.authFailure('No token '))
  }
  console.log('check auth')
}


export function* updateProfile(action){
   const user = yield axios.patch(`http://localhost:3001/users/${action.user.id}`,
   {
      unit:action.user.unit,
      timezone:action.user.timezone,
      id:action.user.id
   },
   {
   headers:{
       Authorization:`Bearer ${localStorage.getItem('@token-runing')}`
   }
   })
   
   yield put(ActionCreators.updateProfileSuccess({
      unit:action.user.unit,
      timezone:action.user.timezone
   }))
   console.log('user',user)
}



export function* destroyAuth(){
  localStorage.removeItem('@token-runing')
  localStorage.removeItem('user')
  yield put(ActionCreators.destroyAuthSuccess())
}