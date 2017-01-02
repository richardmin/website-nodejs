import * as React from 'react';
import { MainContent } from 'components/MainContent';
import { BlogPost } from 'components/BlogPost';

interface BlogPostList {
    name: string,
    date: Date,
    title: string,
    description: string,
    post: string,
    
};


export class Blog extends React.Component<any, any> {
    getBlogPosts() {

    }

    render() {
        return <MainContent>
            Content will be inserted here ... eventually.
            First TODO.
            <BlogPost name="Richard" date={new Date(Date.now())} title="Something magical or another" description="A magical way to do tests" />
        </MainContent>;
    }
}
