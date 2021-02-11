import React from 'react';
import Card from './Card';
// import {robots} from './robots'

// const CardList = ({robots}) =>{

// 	const cardArray = robots.map((user,i)=>{
// 		return(
// 			<Card 
// 			key = {i} 
// 			id={robots[i].id} 
// 			name={robots[i].name} 
// 			email={robots[i].email}
// 			/>
// 			);
// 		})

// 	return(
// 		<div>
// 			{cardArray}
// 		</div>
// 		);
// }


// or

const CardList = ({robots}) =>{
	if(true){
		return throw new Error("no");
	}
	else{
	return(
		<div>
			{
				robots.map((user,i)=>{
				return(
							<Card 
							key = {i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
						/>
					);
				})
			}
		</div>
	);
}
}


export default CardList;