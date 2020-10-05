import React from 'react';
import { Heading } from './Heading';
import { Footer } from './Footer';
import '../scss/AboutPage.scss';

const AboutPage = () => {
	return (<><Heading/>
	<div className={"about"}>
		About Page
	</div>
	<Footer/></>);
}

export {
	AboutPage
}
