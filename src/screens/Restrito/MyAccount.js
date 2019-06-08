import React, { Component } from 'react'
import { Route,Link,Switch,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import timezone from 'moment-timezone/data/meta/latest.json'
import Home from './Home'
import ActionCreators from '../../redux/actionCreators'
import { Button } from 'semantic-ui-react'
import { Distance, Duration,DateStr } from '../../screens/elements'

class MyAccount extends Component {
    state = {
        unit:'',
        timezone:''
    }
    componentDidUpdate(previous,props) {
        console.log('update',previous.auth.user,this.props.auth.user)
         if(!this.state.unit || !this.state.timezone){
            this.setState({
                unit:this.props.auth.user.unit,
                timezone:this.props.auth.user.timezone
            })
         }
    }

    handleChange = fieldname => event => {
        console.log(fieldname)
        this.setState({
            [fieldname]:event.target.value
        })   
    }


    handleSave = () => {
        this.props.save({
            unit:this.state.unit,
            timezone:this.state.timezone,
            id:this.props.auth.user.id
        })
    }

    render() {
        return (
            <>
              <h1>Minha conta</h1>
              <select value={this.state.unit} onChange={this.handleChange('unit')}>
                  <option value='metric'>Metrico(KL)</option>
                  <option value='imperial'>Imperia(ML)</option>
              </select>
              <select value={this.state.timezone} onChange={this.handleChange('timezone')}>
                       {Object.keys(timezone.zones).map(item => {
                           return  <option key={item} value={item}>{item}</option>
                        })}
              </select>
              <Button onClick={this.handleSave}>Clique aqui</Button>
               {JSON.stringify(this.state)}
            </>
        )
    }
}

const mapStateToProps = state => {
    console.log('statemiacout', state)
    return {
        auth:state.auth
    }
}

const mapDispacthToprops = dispacth => {
    return {
        save:(user) => dispacth(ActionCreators.updateProfileRequest(user)),
        teste:"testtes"
    }
}

export default connect(mapStateToProps,mapDispacthToprops)(MyAccount)