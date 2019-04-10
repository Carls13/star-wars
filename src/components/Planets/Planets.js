import React, { Component } from 'react';

import Planet from './../Planet/Planet';
import Loader from './../Loader/Loader';
import Pagination from './../Pagination/Pagination';


class Planets extends Component {
	constructor(){
		super()
		this.state = {
			planets: [],
			previous: null,
			next: null
		}
		this.makeRequest = this.makeRequest.bind(this)
		this.goPrevious = this.goPrevious.bind(this)
		this.goNext = this.goNext.bind(this)

	}

	componentDidMount(){
		this.makeRequest('https://swapi.co/api/planets/');
	}

	makeRequest(url){
		fetch(url)
      .then(response=> response.json())
      .then(data => {
      	this.setState({ planets: data.results,
			      		previous: data.previous,
			      		next: data.next
			      	})
      });
	}

	goPrevious(){
		this.setState({
			planets:[] 
		})
		this.makeRequest(this.state.previous)
	}

	goNext(){
		this.setState({
			planets:[]
		})
		this.makeRequest(this.state.next)
	}


      
	render() {
		
	    	const planetsList = this.state.planets.map((planet) =>{
				return (<Planet planet={{planet}}/>)
			})
			
		return !this.state.planets.length ?
			 <Loader/> :	
		 
		 <div>
		 	{planetsList}
		 	<Pagination 
		 		state={this.state}
		 		goNext={this.goNext}
		 		goPrevious={this.goPrevious}/>
		 </div>
}
}
export default Planets;