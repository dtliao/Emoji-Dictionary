import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa3'>
			<input 
				className='box pa3 ba w-15'
				placeholder="&#xf002; search emoji"
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;