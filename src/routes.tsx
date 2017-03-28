import * as React from 'react';
import { Route, Link } from 'react-router-dom';

import { Front } from 'views/Front';
import { Blog } from 'views/Blog';
import { BlogPost } from 'views/BlogPost';
import { Projects } from 'views/Projects';
import { NotFound } from 'components/NotFound';
import { AppFrame } from 'views/AppFrame';

var routes = (
    <Route path="/" component={AppFrame}>
        <Route component={Front} />
        <Route path="blog" component={Blog} />
        <Route path="blog/:SEO/:postId" component={BlogPost} />
        <Route path="projects" component={Projects} />
        <Route path="*" component={NotFound} />}
    </Route>
);


export default routes;