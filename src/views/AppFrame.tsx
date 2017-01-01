import * as React from 'react';
import { NavBar } from 'components/NavBar';
export class AppFrame extends React.Component<any, any> {
    render() {
        return <div>
                <NavBar />
                
                <div className="container theme-showcase" role="main">
                    <h1> 
                    Test
                    </h1>
                    {this.props.children}
                </div>
            </div>;
    }
}