import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Heading } from './Heading';
import { Footer } from './Footer';
import { Titles, Keywords, Yes, No } from './PropContent';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../scss/PropPage.scss';

const PropPage = () => {

	const history = useHistory();
	const params = useParams();
	let page = params["prop"]
	page = parseInt(page.substring(1));

	let prevActive;
	(page === 14) ? prevActive = true : prevActive = false;
	let nextActive;
	(page === 25) ? nextActive = true : nextActive = false;

	const prev = async () => {
		if (page > 14)
			history.push(`/props/:${page-1}`);
	}

	const next = async () => {
		if (page < 25)
			history.push(`/props/:${page+1}`);
	}

	return (<><Heading/>
		<div className="proposition">
		  <div className="linkblock">
			<button className="button prev" disabled={prevActive} onClick={prev}>
				<FontAwesomeIcon icon={faChevronLeft}/>
			</button>
			  <div className={"content"}>
			    <div className={"proptitle"}>Proposition {page}: {Titles[page-14]}</div>
				<div>{Yes[page-14]}</div>
				<div>{No[page-14]}</div>
			  </div>
			<button className="button next" disabled={nextActive} onClick={next}>
				<FontAwesomeIcon icon={faChevronRight}/>
			</button>
		  </div>
		</div>
	<Footer/></>);
}

export {
	PropPage
}
