import { combineReducers } from 'redux'
import auth from './auth'
import runs from './runs'

const rootReducer = combineReducers({
    runs,
    auth
})

export default rootReducer