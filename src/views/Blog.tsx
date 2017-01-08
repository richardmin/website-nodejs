import * as React from 'react';
import { MainContent } from 'components/MainContent';
import { BlogPreview } from 'components/BlogPreview';
import { Loading } from 'components/Loading';
import axios from 'axios';

interface BlogPostList {
    name: string,
    date: Date,
    title: string,
    description: string,
    post: string,

};


export class Blog extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            queryComplete: false,
            error: false
        };
    }

    componentDidMount() {
        axios.get('/api/blog/')
            .then(res => {
                const posts = res.data.data;
                this.setState({ posts });
                this.setState({ queryComplete: true });
            });
    }

    render() {
        if(!this.state.queryComplete) {
            return <MainContent>
                <Loading />
            </MainContent>;
        } 
        else if(this.state.error) {
            return <MainContent>
                <h2>Error: {this.state.posts}</h2>
            </MainContent>;
        }
        else { 
            let formatted_posts = [];
            for(var i = 0; i < this.state.posts.length; i++) {
                const jsDate = new Date(Date.parse(this.state.posts[i].postdate.split('.')[0]));
                formatted_posts.push(
                    <BlogPreview key={this.state.posts[i].id}
                                 name={this.state.posts[i].name} 
                                 date={jsDate} 
                                 description={this.state.posts[i].description} 
                                 title={this.state.posts[i].title}
                                 seo={this.state.posts[i].seo}
                                 postId={this.state.posts[i].id} />
                );
            }
            return <MainContent>
                {formatted_posts}
            </MainContent>;
        }
    }
}
