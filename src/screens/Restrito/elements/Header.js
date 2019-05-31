import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../../../redux/actionCreators'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


const Header = () => {
    return (
        <div>
            <Menu>
                <Menu.Item>Corridas Online Restritos</Menu.Item>
                <Menu.Item as={Link} to="/restrito">Restrito</Menu.Item>
                <Menu.Item as={Link} to="/restrito/runs">Runs</Menu.Item>
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
