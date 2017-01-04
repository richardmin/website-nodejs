import * as React from 'react';
import databaseConnection from 'database';
import { NotFound } from 'components/NotFound';
import { MainContent } from 'components/MainContent';

export class BlogPost extends React.Component<any, any> {

    // Todo: replace with an AJAX call
    getBlogPost() {
        let query = "SELECT * FROM posts where POSTID = ?";
        databaseConnection(query, this.props.params.postId, function(err, rows) {
            if(err) {
                this.setState({
                    queryComplete: true,
                    post: err,
                    error: true,
                    errorCode: 500
                });
                console.log("[MYSQL]: MYSQL query failed. Query: " + query + " Result: " + err);
            }
            else {
                // No results
                if(rows.length == 0) {
                    this.setState({
                        queryComplete: true,
                        error: true,
                        errorCode: 404
                    });
                }

                this.setState({
                    queryComplete: true,
                    name: rows[0].name,

                    title: rows[0].title,
                    description: rows[0].description,
                    post: rows[0].post,

                    posted: rows[0].postdate,
                    update: rows[0].updatetime,
                });
            }
        });
    }

    componentDidMount() {
        this.setState({
            postId: this.props.params.postId,
            queryComplete: false
        });
        this.getBlogPost();
    },

    render() {
        if(!this.state.queryComplete) {
            return <MainContent>
                Currently loading...
            </MainContent>;
        }
        else if(!this.state.error) {
            // TODO: Find out a better way to do this more REACT style -- save a string as JSX?
            // Alternatively, 
            return <MainContent>
                <div dangerouslySetInnerHTML={{__html: this.state.post}} className="postInner"/>
            </MainContent>;
        }
        else {
            switch(this.state.errorCode) {
                case 404:
                    return <MainContent>
                        <NotFound />
                    </MainContent>;
                case 500:
                    return <MainContent>
                        <h2>Error: {this.state.post}</h2>
                    </MainContent>;
            }
        }
    }
}