import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Profile from '../profile/Profile';
import About from '../about/About';
import Projects from '../projects/Projects';
import NotFound from './NotFound';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={Profile} />
			<Route exact path='/about' component={About} />
			{/* <Route exact path="/projects" component={Projects} /> */}

			{/* Not Found Page */}
     <Route component={NotFound} />
		</Switch>
	);
};

export default Routes;
