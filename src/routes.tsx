import * as React from 'react';
import { Match, Miss, Link } from 'react-router-dom';

import { Front } from 'views/Front';
import { Blog } from 'views/Blog';
import { BlogPost } from 'views/BlogPost';
import { Projects } from 'views/Projects';
import { NotFound } from 'components/NotFound';
import { AppFrame } from 'views/AppFrame';

var routes = (
    // <Match pattern="/" component={AppFrame}>
    <div>
        asdf
        
        {/*<Match exact pattern="/" component={Front} />
        <Match pattern="blog" component={Blog} />
        <Match pattern="/blog/:SEO/:postId" component={BlogPost} />
        <Match pattern="projects" component={Projects} />
        <Miss pattern="*" component={NotFound} />*/}
    </div>
    // </Match>
);


export default routes;