import React from 'react';
import { Link } from 'react-router-dom';
import { Heading } from './Heading';
import { Footer } from './Footer';
import '../scss/LandingPage.scss';

const LandingPage = ({changePage}) => {
	return (<><Heading/>
	<div className="landingpage">
		Landing Page!
		<div className="links">
		<Link to={'/'}>Home</Link>
		
		<Link to={'/props/:14'}>Prop 14</Link>
		
		<Link to={'/props/:15'}>Prop 15</Link>
		
		<Link to={'/props/:16'}>Prop 16</Link>
		
		<Link to={'/props/:17'}>Prop 17</Link>
		
		<Link to={'/props/:18'}>Prop 18</Link>
		
		<Link to={'/props/:19'}>Prop 19</Link>
		
		<Link to={'/props/:20'}>Prop 20</Link>
		
		<Link to={'/props/:21'}>Prop 21</Link>
		
		<Link to={'/props/:22'}>Prop 22</Link>
		
		<Link to={'/props/:23'}>Prop 23</Link>
		
		<Link to={'/props/:24'}>Prop 24</Link>
		
		<Link to={'/props/:25'}>Prop 25</Link>
		</div>
	</div>
	<Footer/></>);
}

export {
	LandingPage
}
