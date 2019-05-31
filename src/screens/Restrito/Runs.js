import React, { Component } from 'react'
import { Route,Link,Switch,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import ActionCreators from '../../redux/actionCreators'

class Runs extends Component {
    
    componentDidMount(){
        this.props.load()
    }

    renderRun = (item) => {
        return (
            <tr>
               <td>{item.friendly_name}</td>
               <td>{item.duration}</td>
               <td>{item.distance}</td>
               <td>{item.created}</td>
            </tr>
        )
    }

    render() {
        const runs = {
             friendly_name:'Run teste',
             duration:'100',
             distance:'100',
             created:'2019-01-01 00:00:00'
        }
        return (
            <>
              <h1>Runs Admin</h1>
              <button onClick={() => this.props.create(runs)}>Clique aqui</button>
              <table border="1">
                  <tr>
                      <td>friendly name</td>
                      <td>Duration</td>
                      <td>Distance</td>
                      <td>Created</td>
                  </tr>
                  {this.props.runs.data.map(this.renderRun)}
              </table>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        runs:state.runs
    }
}

const mapDispacthToprops = dispacth => {
    return {
        load:() => dispacth(ActionCreators.getRunsRequest()),
        create:(run) => dispacth(ActionCreators.createRunRequest(run))
    }
}

export default connect(mapStateToProps,mapDispacthToprops)(Runs)