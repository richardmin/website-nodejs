import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Front } from 'views/Front';
import { Blog } from 'views/Blog';
import { BlogPost } from 'views/BlogPost';
import { Projects } from 'views/Projects';
import { NotFound } from 'components/NotFound';

var routes = (
        <Switch>
            <Route path="/blog/:SEO/:postId" component={BlogPost} />
            <Route path="/blog" component={Blog} />
            <Route path="/projects" component={Projects} />
            <Route path="/" component={Front} />
            <Route component={NotFound} />}
        </Switch>
);


export default routes;