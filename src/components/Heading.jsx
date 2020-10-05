import React from 'react';
import { useHistory } from 'react-router-dom';
import '../scss/Heading.scss';

const Heading = () => {

	const history = useHistory();

	return (<div className={"heading"}>
		<div className={"title"} onClick={() => history.push('/')}>CA Ballot Scope</div>
	</div>);
}

export {
	Heading
}
