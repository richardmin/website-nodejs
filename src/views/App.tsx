import * as React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import routes from 'routes';

import { NavBar } from 'components/NavBar';


export default class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                
                <BrowserRouter>
                <div>
                    <NavBar />
                    <div className="container theme-showcase" role="main">    
                        {routes}
                    </div>
                </div>
                </BrowserRouter>
            </div>
        );
    }
}