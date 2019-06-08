import { takeLatest, all ,put } from 'redux-saga/effects'
import { Types } from '../actionCreators'
import { auth, destroyAuth, login, updateProfile } from './auth'
import ActionCreators from '../actionCreators'
import { getRuns, createRun } from './runs';

export default function* rootSaga() {
   yield all([
      takeLatest(Types.SIGNIN_REQUEST,login),
      takeLatest(Types.AUTH_REQUEST,auth),
      takeLatest(Types.GET_RUNS_REQUEST,getRuns),
      takeLatest(Types.CREATE_RUN_REQUEST,createRun),
      takeLatest(Types.DESTROY_AUTH_REQUEST,destroyAuth),
      takeLatest(Types.UPDATE_PROFILE_REQUEST,updateProfile),
      put(ActionCreators.authRequest())
   ])
}