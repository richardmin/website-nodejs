import * as React from 'react';
import { Link } from 'react-router';

export interface BlogPreviewProps { name: string, 
                                    description: string, 
                                    date: Date, 
                                    title: string, 
                                    seo: string, 
                                    postId: Number }

export class BlogPreview extends React.Component<BlogPreviewProps, any> {

    render() {
        return <div className="post">
            <div className="head"><Link to={`/blog/${this.props.seo}/${this.props.postId}`}>{this.props.title} </Link> </div>
            <div className="subHead"> {this.props.description} </div>
            <div className="subsubHead"> Posted by: {this.props.name} on {this.props.date.toLocaleDateString()} </div>
        </div>;
    }
}