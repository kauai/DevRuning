import React, { Component } from 'react'
import { Route,Link,Switch,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import ActionCreators from '../../redux/actionCreators'
import { Table,Button } from 'semantic-ui-react'


const Duration = props => {
    const { duration } = props
    let durationStr = ''
    const hour = Math.floor(duration / 360)
    if(hour > 0){
        durationStr = hour.toString().padStart(2,'0') + ':'
    }
    const minutes = Math.floor((duration - (hour * 360)) / 60)
    durationStr += minutes.toString().padStart(2,'0')
    const seconds = (duration - hour * 360 - minutes * 60)
    durationStr += ':' + seconds.toString().padStart(2,'0')
    return <span>{ durationStr }</span>
}

const Distance = ({ distance, metric }) => {
    let distanceStr = ''
    if(metric == 'metric'){
        distanceStr = distance + 'km'
    }else{
        let distanceMi = distance * 0.621371
        distanceStr = distanceMi.toFixed(2) + 'mi'
    }
    return <span>{ distanceStr }</span>
}

class Runs extends Component {
    
    componentDidMount(){
        this.props.load()
    }

    renderRun = (item) => {
        return (
            <Table.Row>
               <Table.Cell>{item.friendly_name}</Table.Cell>
               <Table.Cell><Duration duration={item.duration}/></Table.Cell>
               <Table.Cell><Distance distance={item.distance} metric={'miles'}/></Table.Cell>
               <Table.Cell>{item.created}</Table.Cell>
            </Table.Row>
        )
    }

    render() {
        const runs = {
             friendly_name:'Mais testes',
             duration:'200',
             distance:'300',
             created:'2019-01-01 10:10:10'
        }
        return (
            <>
              <h1>Runs Restrito</h1>
              <Button onClick={() => this.props.create(runs)}>Clique aqui</Button>
              <Table celled>
                  <Table.Header celled>
                      <Table.HeaderCell>friendly name</Table.HeaderCell>
                      <Table.HeaderCell>Duration</Table.HeaderCell>
                      <Table.HeaderCell>Distance</Table.HeaderCell>
                      <Table.HeaderCell>Created</Table.HeaderCell>
                  </Table.Header>
                  <Table.Body>
                    {this.props.runs.data.map(this.renderRun)}
                  </Table.Body>
              </Table>
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