import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ActionCreator from '../redux/actionCreators'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
class Login extends Component {

    state = {
        form: {
            email:'',
            passwd:''
        }
    }

    handleChange = fieldName => event => {
        this.setState({ form: {
            ...this.state.form,
            [ fieldName ]:event.target.value 
        }})
    }

    login = () => {
        const { email, passwd } = this.state.form
        this.props.login(email, passwd)
    }

    render() {
        if(this.props.auth.isAuth){
            if(this.props.auth.user.role === 'admin'){
                return <Redirect to="/admin"/>
            }
            return <Redirect to="/restrito"/>
        }
        return (
            <div>
                <h1>Login</h1>
                <Form>
                    {this.props.auth.error && <h1>Erro de autenticaçao</h1>}
                    <Form.Field>
                       <label>Email</label>
                       <input type="text" onChange={this.handleChange('email')}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type="password" onChange={this.handleChange('passwd')}/>
                    </Form.Field>
                    <Button primary onClick={this.login}>Logar</Button>
                </Form>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        auth:state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login:(email,passwd) => dispatch(ActionCreator.signinRequest(email,passwd))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)