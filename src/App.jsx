import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { AboutPage } from './components/AboutPage';
import { PropPage } from './components/PropPage';
import { NotFound } from './components/NotFound'; 
import './scss/App.scss';

const App = () => {

	const [page, changePage] = useState(null);

	return (<Switch>
			<Route exact path='/' render={() => <LandingPage changePage={changePage}/>}/>
			<Route path='/about' render={() => <AboutPage/>}/>
			<Route path='/props/:prop' render={() => <PropPage/>}/>
			<Route path='/404' render={() => <NotFound/>}/>
		</Switch>);
}

ReactDOM.render(<Router>
	<App/>
</Router>, document.getElementById('root'));
