import React from 'react'
import { Route,Link,Switch } from 'react-router-dom'
import Home from './Home';

const Users = props => <h1>Users Admin</h1>

const Admin = props =>{
    return (
        <div>
            <h1>Admin</h1>
            <p><Link to="/admin">Home</Link></p>
            <p><Link to="/admin/users">Users</Link></p>
          <div>
              <Switch>
                <Route path={`${props.match.path}/`} exact component={Home}/>
                <Route path={`${props.match.path}/users`} component={Users}/>
             </Switch>
          </div>
       </div>
    )
} 
export default Admin