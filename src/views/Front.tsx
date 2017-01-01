import * as React from 'react';
import { MainContent } from 'components/MainContent';

export class Front extends React.Component<any, any> {
    render() {
        return <MainContent>
            <h3>Hello, my name is Richard.</h3>
            <p> I'm a 3rd year Computer Science Major/Bioinformatics minor at <a href="www.ucla.edu">UCLA</a>.</p>
            <br />
            <p> I program stuff during my free time, and will be posting my experiences programming as well as some of the projects on this page. </p>
        </MainContent>;
    }
}
