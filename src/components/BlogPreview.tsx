import * as React from 'react';

export interface BlogPreviewProps { name: string, description: string, date: Date, title: string }

export class BlogPreview extends React.Component<BlogPreviewProps, any> {

    render() {
        return <div className="post">
            <div className="head"> {this.props.title} </div>
            <div className="subHead"> {this.props.description} </div>
            <div className="subsubHead"> Posted by: {this.props.name} on {this.props.date.toLocaleDateString()} </div>
        </div>;
    }
}