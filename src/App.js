import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Selectionbar from './Selectionbar.js'
import Information from './Information';
import Inbox from './Inbox';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div id="wrapper">
    <div id="wrapper-header">
    <div className="container-fluid">
    <header>
    <div class="logo col-lg-2 col-md-2 col-sm-2 col-xs-12 no-padding">
    <img src="./favicon.ico"/>
    </div>
    <nav class="menu-content col-lg-6 col-md-6 col-sm-12 col-xs-12 no-padding">
                           <ul class="list-inline">
                               <li>Jobs</li>
                               <li><Link to="/inbox" replace>Inbox</Link></li>
                               <li>Calendar</li>
                               <li>Career Page</li>
                               <li>Reports</li>
                           </ul>
      </nav>
      <Route path="/inbox" component={Inbox} exact/>
      </header>
      
    </div>
    <div className="container">
      <Switch>
       <Route path="/" component={Selectionbar}/>
       <Route path="/information" component={Information}/>
      </Switch>
      </div>
    </div>
    </div>
  );
}

export default App;
