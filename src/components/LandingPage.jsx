import React from 'react';
import { Link } from 'react-router-dom';
import { Heading } from './Heading';
import { Footer } from './Footer';
import '../scss/LandingPage.scss';

const LandingPage = () => {
	return (<><Heading/>
	<div className="landingpage">
		Landing Page!
		<div className="links">
		<Link to='/'>Home</Link>
		<Link to='/prop14'>Prop 14</Link>
		<Link to='/prop15'>Prop 15</Link>
		<Link to='/prop16'>Prop 16</Link>
		<Link to='/prop17'>Prop 17</Link>
		<Link to='/prop18'>Prop 18</Link>
		<Link to='/prop19'>Prop 19</Link>
		<Link to='/prop20'>Prop 20</Link>
		<Link to='/prop21'>Prop 21</Link>
		<Link to='/prop22'>Prop 22</Link>
		<Link to='/prop23'>Prop 23</Link>
		<Link to='/prop24'>Prop 24</Link>
		<Link to='/prop25'>Prop 25</Link>
		</div>
	</div>
	<Footer/></>);
}

export {
	LandingPage
}
