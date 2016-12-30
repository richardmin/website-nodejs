import * as React from 'react';
import { NavBar } from 'components/NavBar'

export class AppFrame extends React.Component<any, any> {
    render() {
        return <div>
                <NavBar />
                {this.props.children}
            </div>;
    }
}