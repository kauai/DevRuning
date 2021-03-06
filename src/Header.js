import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from './redux/actionCreators'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


const Header = () => {
    return (
        <div>
            <Menu>
        
                <Menu.Item>Corridas Online</Menu.Item>
                <Menu.Item as={Link} to="/home">Home</Menu.Item>
                <Menu.Item as={Link} to="/restrito">Restrito</Menu.Item>
                <Menu.Item as={Link} to="/admin">Admin</Menu.Item>
                <Menu.Item as={Link} to="/login">Login</Menu.Item>
                
            </Menu>
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
