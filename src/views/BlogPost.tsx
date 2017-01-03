import * as React from 'react';
import databaseConnection from 'database';

export class BlogPost extends React.Component<any, any> {
    getBlogPost() {
        let query = "SELECT * FROM posts where POSTID = ?";
        databaseConnection(query, this.props.params.postId, function(err, rows, fields) {
            if(err) throw err;

            console.log("the solution is: ", rows[0].solution);
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
            return <div>
                Currently loading...
            </div>;
        }
        else {
            //TODO: Find out a better way to do this more REACT style -- save a string as REACT?
            return <div>
                <div dangerouslySetInnerHTML={{__html: this.state.post}} />
            </div>;
        }
    }
}