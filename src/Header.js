import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from './redux/actionCreators'

const Header = () =>{
        return (
            <div>
                <h1>Welcome to a react</h1>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        auth:state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signing:(email,senha) => ActionCreators.signinRequest(email,senha) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
