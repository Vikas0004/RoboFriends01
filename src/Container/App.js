import React , { Component , useState ,useEffect } from 'react';
import SearchBox from '../Components/searchBox';
import CardList from '../Components/cardList';
import Scroll from '../Components/scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';


function App() {
	// constructor(){
	// 	super()
	// 		this.state = {
	// 		robots : [],
	// 		searchfield : ''
	// 		}
	// }
const [robots , setRobots] = useState([])
const [searchfield , setSearchField] = useState('')
const [count , setCount] = useState(0)


const onSearchChange = (event) => {
	setSearchField(event.target.value);
}

useEffect(()=>{
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(user => setRobots(user));
	console.log(count)
},[count])
	// componentDidMount(){
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then(response => response.json())
	// 	.then(user => this.setState({robots:user}));
	// }



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
			<button onClick = {() =>setCount(count+1)}>click me!</button>
			<SearchBox searchChange = {onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
					<CardList robots = {filterRobot} />
				</ErrorBoundry>
			</Scroll>
		</div>
	);	
}
	
	
}

export default App; 