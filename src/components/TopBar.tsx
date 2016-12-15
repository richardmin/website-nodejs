import * as React from "react";

export interface TopBarProps { compiler: string, framework: string; }

export class TopBar extends React.Component<TopBarProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}! I am topbar</h1>;
    }
}

