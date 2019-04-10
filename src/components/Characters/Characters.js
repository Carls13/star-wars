import React, { Component } from 'react';

import Character from './../Character/Character';
import Loader from './../Loader/Loader';
import Pagination from './../Pagination/Pagination';


class Characters extends Component {
	constructor(){
		super()
		this.state = {
			characters: [],
			previous: null,
			next: null
		}
		this.makeRequest = this.makeRequest.bind(this)
		this.goPrevious = this.goPrevious.bind(this)
		this.goNext = this.goNext.bind(this)

	}

	componentDidMount(){
		this.makeRequest('https://swapi.co/api/people/');
	}

	makeRequest(url){
		fetch(url)
      .then(response=> response.json())
      .then(data => {
      	this.setState({ characters: data.results,
			      		previous: data.previous,
			      		next: data.next
			      	})
      });
	}

	goPrevious(){
		this.setState({
			characters:[] 
		})
		this.makeRequest(this.state.previous)
	}

	goNext(){
		this.setState({
			characters:[]
		})
		this.makeRequest(this.state.next)
	}


      
	render() {
		
	    	const charactersList = this.state.characters.map((character) =>{
				return (<Character character={{character}}/>)
			})
			
		return !this.state.characters.length ?
			 <Loader/> :	
		 
		 <div>
		 	{charactersList}
		 	<Pagination 
		 		state={this.state}
		 		goNext={this.goNext}
		 		goPrevious={this.goPrevious}/>
		 </div>
}
}
export default Characters;