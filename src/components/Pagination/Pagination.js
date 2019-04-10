import React from 'react';

const Navigation = ({ state, goNext, goPrevious }) => {

	let pagination;
	if (state.previous && state.next){
		pagination = 
		<div class="mw8 center">
			<nav class="cf pa3 pa4-ns" data-name="pagination-next-prev">
				<a class="fl f4 tracked white f4-l link bg-animate black-80 hover-black hover-bg-yellow dib pa3 ph4-l" onClick={() => goPrevious()} title="Previous">&larr; Previous</a>
				<a class="fr f4 tracked white f4-l link bg-animate black-80 hover-black hover-bg-yellow dib pa3 ph4-l" onClick={() => goNext()} title="Next">Next &rarr;</a>
			</nav>
		</div>
	} else if (state.previous && ! state.next){
		pagination =
		<div class="mw8 center">
			<nav class="cf pa3 pa4-ns" data-name="pagination-next-prev">
				<a class="fl f4 tracked white f4-l link bg-animate black-80 hover-black hover-bg-yellow dib pa3 ph4-l" onClick={() => goPrevious()} title="Previous">&larr; Previous</a>
							</nav>
		</div>
	} else if (!state.previous && state.next){
		pagination =		
		<div class="mw8 center">
			<nav class="cf pa3 pa4-ns" data-name="pagination-next-prev">
				<a class="fr f4 tracked white f4-l link bg-animate black-80 hover-black hover-bg-yellow dib pa3 ph4-l" onClick={() => goNext()} title="Next">Next &rarr;</a>
			</nav>
		</div>
	}

	return (pagination)
}

export default Navigation;