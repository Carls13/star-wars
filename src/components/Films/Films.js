import React, { Component } from 'react';

import Film from './../Film/Film';
import { connect } from 'react-redux';
import { requestFilms } from './../../actions.js';

const mapStateToProps = state =>{
	console.log(state)
		// return {
		// 	films: state.requestFilms.films,
		// 	isPending: state.requestFilms.isFilmsPending,
		// 	error: state.requestFilms.filmsError
		// };
}

const mapDispatchToProps = (dispatch) =>{
	return {
		onRequestFilms: () => dispatch(requestFilms())
		};
	}


class Films extends Component {
	constructor(){
		super()
	}

	componentDidMount(){
		this.props.onRequestFilms()
	}


      
	render() {
		const { films, isPending } = this.props;

		
	    	const filmsList = films.map((film) =>{
				return (<div className="bt bb b--yellow film">
							<Film film={{film}} 
							openModal={this.props.openModal} 
							closeModal={this.props.closeModal}
							isVisible={this.props.isVisible}/>
						</div>
						);
			})
			
		return isPending ?
			 <h1>Loading...</h1> :	
		{ filmsList }
}
}
export default connect(mapDispatchToProps, mapStateToProps)(Films);