import React from 'react';
import {Link} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Information from './Information'

function Selectionbar() {
   
        return (
          
            <div className="dropdown">
                 <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select
    <span className="caret"></span></button>
    <ul className="dropdown-menu">
      <li><Link to="/information" >Python</Link></li>
      <li>Python Dev</li>
      <li>Android</li>  
    </ul>
    <Route path="/information" component={Information} exact/>
  </div>
 
        )
}
export default Selectionbar;
