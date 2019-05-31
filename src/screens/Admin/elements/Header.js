import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../../../redux/actionCreators'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


const Header = () => {
    return (
        <div>
            <Menu>
                <Menu.Item>Corridas Online ADMIN</Menu.Item>
                <Menu.Item as={Link} to="/admin">Home</Menu.Item>
                <Menu.Item as={Link} to="/admin/users">Usuarios</Menu.Item>
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
