import React from 'react';
import { Link } from 'react-router-dom';
import { Heading } from './Heading';
import { Footer } from './Footer';
import '../scss/PropPage.scss';

const PropPage = ({number}) => {

	const declink = `/prop${number-1}`;
	const inclink = `/prop${number+1}`;

	if (number === 14) {
		return (<><Heading/>
		<div className="proposition">
		<div className="linkblock">
			Prop Page {number}
			<Link to={inclink}>Next</Link>
		</div>
		</div>
		<Footer/></>);
	}
	else if (number === 25) {
		return (<><Heading/>
		<div className="proposition">
		<div className="linkblock">
			<Link to={declink}>Prev</Link>
			Prop Page {number}
		</div>
		</div>
		<Footer/></>);
	}
	return (<><Heading/>
	<div className="proposition">
		<div className="linkblock">
		<Link to={declink}>Prev</Link>
		Prop Page {number}
		<Link to={inclink}>Next</Link>
		</div>
		</div>
		<Footer/></>);
}

export {
	PropPage
}
