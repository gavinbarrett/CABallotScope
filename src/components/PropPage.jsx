import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Heading } from './Heading';
import { Footer } from './Footer';
import { Titles, Keywords, Yes, No, Texts, Background } from './PropContent';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../scss/PropPage.scss';

const NavButton = ({bool, func, icon}) => {
	return (<button className="button prev" disabled={bool} onClick={func}>
		<FontAwesomeIcon icon={icon}/>
	</button>);
}

const KeyWords = ({k}) => {
	return (<div className={"keywords"}>keywords: {k}</div>);
}

const BackgroundText = ({background}) => {
	return (<div className={"backgroundwrapper"}>
		<div className="propbackground">
			{background}
		</div>
	</div>);
}

const VoteProp = ({vote, votetext, page}) => {
	return (<div className={"prompt"}>
			Voting
			<div className={"bolder"}>{vote}</div>
			{votetext}
		</div>);
}

const FullTextLink = ({text}) => {
	return (<div className={"fulltext"}>
		<a href={text}>Full Proposition Text</a>
	</div>);
}

const PropPage = () => {

	const history = useHistory();
	const params = useParams();
	let page = params["prop"]
	page = parseInt(page.substring(1));

	const [currPos, updateCurrPos] = useState([]);

	const back = Background[page-14];
	const text = Texts[page-14];
	const key = Keywords[page-14];
	const voteyes = Yes[page-14];
	const voteno = No[page-14];

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

	const start = async (e) => {
		console.log(e.changedTouches[0]);
		await updateCurrPos([e.changedTouches[0].screenX, e.changedTouched[0].screenY]);
	}

	const calcDifference = async (e) => {
		console.log(e.changedTouches[0]);
		console.log(`xdiff: ${currPos[0] - e.changedTouches[0].screenX}`);
		console.log(`ydiff: ${currPos[1] - e.changedTouches[0].screenY}`);
		await updateCurrPos([e.changedTouches[0].screenX, e.changedTouches[0].screenY]);
	}

	return (<><Heading/>
		<div className="proposition">
		  <div className="linkblock">
		    <NavButton bool={prevActive} func={prev} icon={faChevronLeft}/>
			  <div className={"content"} onTouchStart={start} onTouchMove={calcDifference}>
			    <div className={"proptitle"}>Proposition {page}: {Titles[page-14]}</div>
				<KeyWords k={key}/>
				{back ? <BackgroundText background={back}/> : ''}
				<VoteProp vote={"YES"} votetext={voteyes} page={page}/>
			  	<VoteProp vote={"NO"} votetext={voteno} page={page}/>
				<FullTextLink textlink={text}/>
			  </div>
		    <NavButton bool={nextActive} func={next} icon={faChevronRight}/>
		  </div>
		</div>
	<Footer/></>);
}

export {
	PropPage
}
