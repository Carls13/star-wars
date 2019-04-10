import React from 'react';
import swLogo from './SWLogo.png';

const Navigation = ({ changeRoute }) => {
	return (
		  <nav className="db dt-l w-100 border-box pa3 ph5-l">
			  <p className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l">
			    <img src={swLogo} alt="Star Wars App"/>
			  </p>
		  <div className="db dtc-l yellow v-mid w-100 w-75-l tc tr-l">
		    <p class="f4 tracked white f4-l link bg-animate black-80 hover-black hover-bg-yellow dib pa3 ph4-l" onClick={() => changeRoute('home')} >Home</p>
		    <p class="f4 tracked white f4-l link bg-animate black-80 hover-black hover-bg-yellow dib pa3 ph4-l" onClick={() => changeRoute('characters')} >Characters</p>
		    <p class="f4 tracked white f4-l link bg-animate black-80 hover-black hover-bg-yellow dib pa3 ph4-l" onClick={() => changeRoute('planets')} >Planets</p>
		    <p class="f4 tracked white f4-l link bg-animate black-80 hover-black hover-bg-yellow dib pa3 ph4-l" onClick={() => changeRoute('films')} >Films</p>
		    <p class="f4 tracked white f4-l link bg-animate black-80 hover-black hover-bg-yellow dib pa3 ph4-l" onClick={() => changeRoute('about')} >About</p>
		  </div>
		  
		</nav>
		)
}

export default Navigation;