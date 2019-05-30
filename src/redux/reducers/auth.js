import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'
console.log(Types)
export const INITIAL_STATE = {
    isAuthing:false,
    isAuth:false,
    isSignin:false,
    user:{},
    error:false,
    erroMessage:""
}

export const signinRequest= (state = INITIAL_STATE,action) => {
    return {
        ...state,
        isSignin:true,
        error:false,
        erroMessage:''
    }
}

export const signinSuccess = (state = INITIAL_STATE,action) => {
    return {
        ...state,
        isSignin:false,
        isAuth:true,
        user:action.user
    }
}

export const signinFailure = (state = INITIAL_STATE,action) => {
    return {
        ...state,
        isSignin:false,
        error:true,
        erroMessage:action.error
    }
}

export const HANDLERS = {
    [Types.SIGNIN_REQUEST]:signinRequest,
    [Types.SIGNIN_SUCCESS]:signinSuccess,
    [Types.SIGNIN_FAILURE]:signinFailure
}

export default createReducer(INITIAL_STATE,HANDLERS)