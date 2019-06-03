import React, { Component } from 'react'
import { Route,Link,Switch,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import ActionCreators from '../../redux/actionCreators'
import { Table,Button } from 'semantic-ui-react'
import { Distance, Duration,DateStr } from '../../screens/elements'

class Runs extends Component {
    
    componentDidMount() {
        this.props.load()
    }

    renderRun = (item) => {
        return (
            <Table.Row>
               <Table.Cell>{item.friendly_name}</Table.Cell>
               <Table.Cell><Duration duration={item.duration}/></Table.Cell>
               <Table.Cell><Distance distance={item.distance} metric={'miles'}/></Table.Cell>
               <Table.Cell><DateStr date={item.created} timezone={'America/Sao_Paulo'}/></Table.Cell>
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