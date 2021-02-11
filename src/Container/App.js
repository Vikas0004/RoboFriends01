import React , { Component } from 'react';
import SearchBox from '../Components/searchBox';
import CardList from '../Components/cardList';
import Scroll from '../Components/scroll';
import './App.css';


class App extends Component{
	constructor(){
		super()
			this.state = {
			robots : [],
			searchfield : ''
			}
	}

onSearchChange = (event) => {
	this.setState({searchfield : event.target.value})
}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(user => this.setState({robots:user}));
}

	render(){
		const {robots , searchfield} = this.state;
		const filterRobot = robots.filter(robot =>
		{
				return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		if(!robots.length)
		{
			return <h1 className = 'tc'>Loading</h1>
		}
		else
		{
			return(
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange = {this.onSearchChange}/>
					<Scroll>
						<CardList robots = {filterRobot} />
					</Scroll>
				</div>
			);	
		}
		
	}
}

export default App; 