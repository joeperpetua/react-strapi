import React from 'react';
import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import User from "./User/User";
import Admin from "./Admin/Admin";





class Main extends React.Component{
    
    render(){
        return(
          <Switch>
            <Route exact path="/"  component={Login} />
            <Route exact path="/user" component={User}/>
            <Route path="/admin" component={Admin}/>
          </Switch>

        );
    }
    
}


export default Main;