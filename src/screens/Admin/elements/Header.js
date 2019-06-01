import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../../../redux/actionCreators'
import { Link } from 'react-router-dom'
import { Menu,Dropdown } from 'semantic-ui-react'


const Header = (props) => {
    const name = props.auth.user.name
    return (
        <div>
            <Menu>
                <Menu.Item>Corridas Online ADMIN</Menu.Item>
                <Menu.Item as={Link} to="/admin">Home</Menu.Item>
                <Menu.Item as={Link} to="/admin/users">Usuarios</Menu.Item>
                <Menu.Menu position="right">
                <Dropdown item text={name}>
                    <Dropdown.Menu>
                        <Dropdown.Item>Minha Conta</Dropdown.Item>
                        <Dropdown.Item>Alterar Senha</Dropdown.Item>
                        <Dropdown.Item onClick={props.logout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Menu.Menu>
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
        signing:(email,senha) => ActionCreators.signinRequest(email,senha),
        logout:() => dispatch(ActionCreators.destroyAuthRequest())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
