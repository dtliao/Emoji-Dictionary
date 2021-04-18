import React, { Component } from 'react';
import List from '../components/List';
import { Words } from '../database/Words';
import SearchBox from '../components/SearchBox';
import { Change } from '../database/Change';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {
	constructor() {
		super()
		this.state = {
			Words: Words,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}
	render() {
		const {Words, searchfield} = this.state
		const filteredWords = Words.filter(Word =>{
			const description = Change(Word.name)
			return description.toLowerCase().startsWith(searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<div className='top'>
					<h1 className='f1' >Emoji Dictionary</h1>
					<SearchBox searchChange={this.onSearchChange}/>
				</div>
				<Scroll>
					<ErrorBoundry>
						<List Words={filteredWords}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}

export default App;