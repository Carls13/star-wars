import React, { Component } from 'react';

import Film from './../Film/Film';
import Loader from './../Loader/Loader';


class Films extends Component {
	constructor(){
		super()
		this.state = {
			films: []
		}
	}

	componentDidMount(){
		fetch('https://swapi.co/api/films/')
      .then(response=> response.json())
      .then(data => {
      	this.setState({ films: data.results})
      });
	}


      
	render() {
		
	    	const filmsList = this.state.films.map((film) =>{
				return (<div className="bt bb b--yellow film">
							<Film film={{film}} 
							openModal={this.props.openModal} 
							closeModal={this.props.closeModal}
							isVisible={this.props.isVisible}/>
						</div>
						);
			})
			
		return !this.state.films.length ?
			 <Loader/> :	
		 filmsList 
}
}
export default Films;