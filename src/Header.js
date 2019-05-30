import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from './redux/actionCreators'
import { Link } from 'react-router-dom'

const Header = () =>{
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/restrito">Restrito</Link></li>
                        <li><Link to="/admin">Admin</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
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
