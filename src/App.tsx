import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import routes from 'routes';

import { NavBar } from 'components/NavBar';
import { Match, Miss, Link } from 'react-router-dom';


export default class App extends React.Component<any, any> {
    render() {
        // console.log("Hello there");
        // let myFront = new Front();
        // console.log(myFront);
        return (
            <Router>
                <NavBar />
                {/*<Match exact pattern="/" component={Front} />*/}
                {/*{routes}*/}
            </Router>
        );
    }
}