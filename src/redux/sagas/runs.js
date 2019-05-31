import axios from 'axios'
import ActionCreators from '../actionCreators'
import { put } from 'redux-saga/effects'

export function* getRuns(){
   const runs = yield axios.get('http://localhost:3001/runs',{
           headers:{
               Authorization:`Bearer ${localStorage.getItem('@token-runing')}`
           }
   })

   yield put(ActionCreators.getRunsSuccess(runs.data.data))
}

export function* createRun(action){
    const runs = yield axios.post('http://localhost:3001/runs',
            action.run,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('@token-runing')}`
            }
    })
 
    //yield put(ActionCreators.getRunsSuccess(runs.data))
 }