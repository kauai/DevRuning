import React from 'react'
import { Redirect,Link,Switch,Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import Runs from './Runs'
import Header from './elements/Header'
import MyAccount from './MyAccount';

const Restrito = (props) => {
    console.log('isSining',props.auth.isSaving)
    // if(props.auth.isSaving){
    //     return <p>Loading...</p>
    // }

    // if(!props.auth.isAuth){
    //     return <Redirect to="/login"/>
    // }

    return (
        <div>
            <Header/>
            <div>
                <Switch>
                    <Route path={`${props.match.path}/`} exact component={Home}/>
                    <Route path={`${props.match.path}/runs`} component={Runs}/>
                    <Route path={`${props.match.path}/myaccount`} component={MyAccount}/>
                </Switch>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps)(Restrito)