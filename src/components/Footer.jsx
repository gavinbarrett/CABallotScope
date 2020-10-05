import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Footer.scss';

const Footer = () => {
	return (<div className={'footer'}>
		<Link className={"footerlink"} to='/'>Home</Link>
		<Link className={"footerlink"} to='/about'>About</Link>
		<Link className={"footerlink"} to='/props/:14'>Props</Link>
	</div>);
}

export {
	Footer
}
