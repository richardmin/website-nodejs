import * as React from 'react';
import { NotFound } from 'components/NotFound';
import { MainContent } from 'components/MainContent';
import { Loading } from 'components/Loading';
export class BlogPost extends React.Component<any, any> {

    // Todo: replace with an AJAX call
    getBlogPost() {
        
    }

    componentWillMount() {
        this.setState({
            queryComplete: false,
            postId: this.props.params.postId
        });
    }
    componentDidMount() {
        this.getBlogPost();
    }

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