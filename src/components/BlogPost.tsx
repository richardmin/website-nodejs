import * as React from 'react';

export interface BlogPostProps { name: string, post: string, date: Date, post_title: string, char_count: number }

export class BlogPost extends React.Component<BlogPostProps, any> {
    strip_characters(post: string, char_count: number) {
        if(post.length < char_count) return post;
        return post.substring(0, char_count - 3) + "...";

    }

    render() {
        return <div>
            <h2> {this.props.post_title} </h2>
            Posted by {this.props.name} posted {this.strip_characters(this.props.post, this.props.char_count)} at {this.props.date.toLocaleTimeString()}
        </div>;
    }
}