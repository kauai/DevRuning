import { takeLatest, all ,put } from 'redux-saga/effects'
import { Types } from '../actionCreators'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import ActionCreators from '../actionCreators'
import { getRuns, createRun } from './runs';

function* login(action) {

     let Htoken = localStorage.getItem('@token-runing')
     
      const { data:{ token,message }} = yield axios.post('http://localhost:3001/users/login',{
        email:action.email,
        passwd:action.passwd
      })

      if(token) {
         Htoken = token
         localStorage.setItem('@token-runing',token)
         const user = jwtDecode(Htoken)
         localStorage.setItem('user',user)
         yield put(ActionCreators.signinSuccess( user ))
      }else{
         yield put(ActionCreators.signinFailure(message))
      }
}

function* auth(){
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

export default function* rootSaga() {
   yield all([
      takeLatest(Types.SIGNIN_REQUEST,login),
      takeLatest(Types.AUTH_REQUEST,auth),
      takeLatest(Types.GET_RUNS_REQUEST,getRuns),
      takeLatest(Types.CREATE_RUN_REQUEST,createRun),
      put(ActionCreators.authRequest())
   ])
}