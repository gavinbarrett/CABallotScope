import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { PropPage } from './components/PropPage';
import './scss/App.scss';

const App = () => {
	return (<Switch>
			<Route exact path='/' render={() => <LandingPage/>}/>
			<Route path='/prop14' render={() => <PropPage number={14}/>}/>
			<Route path='/prop15' render={() => <PropPage number={15}/>}/>
			<Route path='/prop16' render={() => <PropPage number={16}/>}/>
			<Route path='/prop17' render={() => <PropPage number={17}/>}/>
			<Route path='/prop18' render={() => <PropPage number={18}/>}/>
			<Route path='/prop19' render={() => <PropPage number={19}/>}/>
			<Route path='/prop20' render={() => <PropPage number={20}/>}/>
			<Route path='/prop21' render={() => <PropPage number={21}/>}/>
			<Route path='/prop22' render={() => <PropPage number={22}/>}/>
			<Route path='/prop23' render={() => <PropPage number={23}/>}/>
			<Route path='/prop24' render={() => <PropPage number={24}/>}/>
			<Route path='/prop25' render={() => <PropPage number={25}/>}/>
		</Switch>);
}

ReactDOM.render(<Router>
	<App/>
</Router>, document.getElementById('root'));
