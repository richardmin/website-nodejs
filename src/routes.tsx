import * as React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import { Front } from 'views/Front';
import { Blog } from 'views/Blog';
import { BlogPost } from 'views/BlogPost';
import { Projects } from 'views/Projects';
import { NotFound } from 'components/NotFound';
import { AppFrame } from 'views/AppFrame';

var routes = (
    <Route path="/" component={AppFrame}>
        <IndexRoute component={Front} />
        <Route path="blog" component={Blog} />
        <Route path="/blog/:SEO/:postId" component={BlogPost} />
        <Route path="projects" component={Projects} />
        <Route path="*" component={NotFound} />}
    </Route>
);


export default routes;