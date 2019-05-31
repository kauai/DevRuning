import React from 'react'
import { Redirect,Link,Switch,Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import Runs from './Runs'

const Restrito = (props) => {
    
    if(!props.auth.isAuth){
        return <Redirect to="/login"/>
    }

    return (
        <div>
            <h1>Restrito</h1>
            <p><Link to="/restrito">Home</Link></p>
            <p><Link to="/restrito/runs">Runs</Link></p>
            <div>
                <Switch>
                    <Route path={`${props.match.path}/`} exact component={Home}/>
                    <Route path={`${props.match.path}/runs`} component={Runs}/>
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