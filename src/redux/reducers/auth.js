import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

// console.log(Types)

export const INITIAL_STATE = {
    isAuthing:false,
    isAuth:false,
    isSignin:false,
    isSaving:false,
    user:{},
    error:false,
    erroMessage:""
}

export const signinRequest= (state = INITIAL_STATE,action) => {
    return {
        ...state,
        isSignin:true,
        error:false,
        erroMessage:'Bateu aqui'
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

export const authRequest = (state = INITIAL_STATE,action) => {
    return {
        ...state,
        isSignin:false,
        error:true,
        erroMessage:action.error
    }
}

export const authSuccess = (state = INITIAL_STATE,action) => {
    console.log('AUTHSUCCESS',action)
    return {
        ...state,
        isSignin:false,
        isAuth:true,
        user:action.user
    }
}

export const authFailure = (state = INITIAL_STATE,action) => {
    return {
        ...state,
        isSignin:false,
        isAuth:false,
        error:true,
        erroMessage:action.error
    }
}

export const destroyAuthSuccess = (state = INITIAL_STATE,action) => {
    return {
        ...state,
        isSignin:false,
        isAuth:false,
        user:{}
    }
}


export const updateProfileRequest = (state = INITIAL_STATE,action) => {
    return {
        ...state,
        isSaving:true,
        error:false,
        erroMessage:'Bateu aqui'
    }
}


export const updateProfileSuccess = (state = INITIAL_STATE,action) => {
    const newUser = {
        ...state.user,
    }
    Object.keys(action.user).forEach(item => {
         newUser[item] = action.user[item]
    })
    return {
        ...state,
        isSaving:false,
        user:newUser
    }
}


export const updateProfileFailure = (state = INITIAL_STATE,action) => {
    return {
        ...state,
        isSaving:false,
        error:true,
        erroMessage:action.error
    }
}





export const HANDLERS = {
    [Types.SIGNIN_REQUEST]:signinRequest,
    [Types.SIGNIN_SUCCESS]:signinSuccess,
    [Types.SIGNIN_FAILURE]:signinFailure,

    [Types.AUTH_REQUEST]:authRequest,
    [Types.AUTH_SUCCESS]:authSuccess,
    [Types.AUTH_FAILURE]:authFailure,

    [Types.DESTROY_AUTH_SUCCESS]:authFailure,

    [Types.UPDATE_PROFILE_REQUEST]:updateProfileRequest,
    [Types.UPDATE_PROFILE_SUCCESS]:updateProfileSuccess,
    [Types.UPDATE_PROFILE_FAILURE]:updateProfileFailure
}

export default createReducer(INITIAL_STATE,HANDLERS)