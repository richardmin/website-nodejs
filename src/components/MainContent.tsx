import * as React from 'react';

export class MainContent extends React.Component<any, any> {
    render() {
        return <div className="jumbotron mainContent">
            {this.props.children}
        </div>;
    }
}
