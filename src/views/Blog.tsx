import * as React from 'react';
import { MainContent } from 'components/MainContent';
import { BlogPreview } from 'components/BlogPreview';
import { Loading } from 'components/Loading';

// import databaseConnection from 'database';

interface BlogPostList {
    name: string,
    date: Date,
    title: string,
    description: string,
    post: string,

};


export class Blog extends React.Component<any, any> {

    // Todo: replace with an AJAX call
    getBlogPosts() {
        
    }   

    componentWillMount() {
        this.setState({
            queryComplete: false
        });
    }

    componentDidMount() {
        this.getBlogPosts();
    }

    render() {
        if(!this.state.queryComplete) {
            return <MainContent>
                <Loading />
            </MainContent>;
        } 
        else if(!this.state.error) { 
            let formatted_posts = [];
            for(var i = 0; i < this.state.posts.length; i++) {
                formatted_posts.push(
                    <BlogPreview name={this.state.posts[i].name} 
                                 date={this.state.posts[i].postdate} 
                                 description={this.state.posts[i].description} 
                                 title={this.state.posts[i].title} />
                );
            }
            return <MainContent>
                {formatted_posts}
            </MainContent>;
        }
        else {
            return <MainContent>
                <h2>Error: {this.state.post}</h2>
            </MainContent>;
        }

    }
}
