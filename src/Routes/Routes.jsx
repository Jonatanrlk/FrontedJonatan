import React from "react";
import {
    BrowserRouter as Router,
    Switch, 
    Route
} from "react-router-dom"

const Routes = () => {
    return(
        <Router>
            <Route  path={'/dash','/roles','/Ventas'}>
                <Switch>
                    <Route path ='/dash'>
                        <Dasboard/> 
                    </Route>
                    <Route path ='/roles'>
                        <Roles/> 
                    </Route>
                    <Route path ='/ventas'>
                        <Ventas/> 
                    </Route>
                </Switch>
            </Route>
               
        </Router>
    );
}

