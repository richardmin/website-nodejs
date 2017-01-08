import * as React from 'react';
import { NotFound } from 'components/NotFound';
import { MainContent } from 'components/MainContent';
import { Loading } from 'components/Loading';
import axios from 'axios';

export class BlogPost extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.state = {
            queryComplete: false,
            postId: this.props.params.postId,
            error: false
        };
    }

    componentDidMount() {
        axios.get('/api/blog/' + this.state.postId)
            .then(res => {
                const postData = res.data.data[0];
                this.setState({ postData });
                this.setState({ queryComplete: true });
            });
    }

    render() {
        if(!this.state.queryComplete) {
            return <MainContent>
                Currently loading...
            </MainContent>;
        }
        else if(this.state.error) {
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
        else {
            // TODO: Find out a better way to do this more REACT style -- save a string as JSX?
            console.log("hello");
            return <MainContent>
                <div dangerouslySetInnerHTML={{__html: this.state.postData.post}} className="postInner"/>
            </MainContent>;
        }
    }
}