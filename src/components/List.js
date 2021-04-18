import React from 'react';
import Row from './Row';

const List = ({ Words }) => {
	return (
		<div className='w-50' style={{marginLeft: 'auto', marginRight: 'auto',  overflowY: 'scroll', border: '2.5px solid black', height: '850px'}}>
			{
				Words.map((word, i) => {
					return (
						<Row key={i} name = {word.name}/>
					);
				})
			}
		</div>
	);
}

export default List;