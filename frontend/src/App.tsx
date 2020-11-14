import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import './App.css';
import DeviceCreate from './Views/DeviceCreate/DeviceCreate';
import DeviceEdit from './Views/DeviceEdit/DeviceEdit';
import DevicesList from './Views/DevicesList/DevicesList';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/devices" component = {DevicesList} />
          <Route exact path="/devices/:id/edit" component = {DeviceEdit} />
          <Route exact path="/devices/create" component = {DeviceCreate} />
          <Redirect from='/' to='/devices' />
        </Switch>
    </Router>
  );
}

export default App;
