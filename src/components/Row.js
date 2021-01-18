import React from 'react';
import './Row.css';
import { Change } from '../database/Change';

const Row = ({ name }) => {
	const changedWords = Change(name);
	return (
	<div className ='flex justify-center w-100'>
		<div className ='flex pa3 f1 outline w-100'>
			<div className="component">
				<img className="f1 grow pointer" alt ='faces' src={`https://robohash.org/${name}.png`}/>
				<h2 className="fr">{changedWords}</h2>
			</div>
		</div>
	</div>
	);
}

export default Row;