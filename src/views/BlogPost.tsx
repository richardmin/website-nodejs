import * as React from 'react';
import databaseConnection from 'database';

export class BlogPost extends React.Component<any, any> {
    getBlogPost() {
        
        databaseConnection('SELECT * FROM posts WHERE POSTID = ?', this.props.params.postId, function(err, rows, fields) {
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

        }
    }
}