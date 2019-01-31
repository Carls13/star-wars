import React from 'react'
import Crawl from 'react-star-wars-crawl'
import Modal from 'react-awesome-modal';

import characters from './characters.svg';
import movies from './films.png';
import planets from './planets.svg';



// Import the necessary styles, or include them another way with your build process
import 'react-star-wars-crawl/lib/index.css'

const Home = ({ openModal, closeModal, isVisible, changeRoute }) => (
  <div>
  <article className="baskerville pb5">
  <header className="avenir tc-l ph3 ph4-ns pt4 pt5-ns">
  <h1 className="f3 f2-m f-subheadline-l yellow measure lh-title fw1 mt0">
  {`Welcome you`}</h1>
  <h1 className="f5 yellow f4-l db fw1 baskerville mb4">
  {`If understand this page you want, read this you may`}
  </h1>
  </header>
  <div className="ph3 ph4-m ph5-l">
  <div className="measure db center f5 f4-ns lh-copy">
  <p className="yellow">
  Here you will have a lot of fun, play switching 
  between tabs with the nav buttons above and you will find 
  information about Star Wars people, planets and movies. The data is obtained 
  thanks to the Star Wars API, make a pause and visit it: 
  www.swapi.co. In the 'About' section, you will know a little about the creator. 
  No further addo, may the force be with you!
  </p>
  </div>
  </div>
  <span className="center">
  <input className="f6 center link dim ph3 pv2 mb2 dib white bg-black" type="button" value="View crawl" onClick={() => openModal()} />
  </span>

  <Modal visible={isVisible} width="1000" height="400" effect="fadeInUp" onClickAway={() => closeModal()}>
  <div className="bg-black ba b--yellow">
  <a className="f1 right link dim ph3 pv2 mb2 dib yellow bg-black" href="javascript:void(0);" onClick={() => closeModal()}>X</a>
  <Crawl
  title="Welcome you"
  subTitle="If understand this page you want, read this you may"
  text="Here you will have a lot of fun, play switching 
  between tabs with the nav buttons above and you will find 
  information about Star Wars people, planets and movies. The data is obtained 
  thanks to the Star Wars API, make a pause and visit it: 
  www.swapi.co. In the 'About' section, you will know a little about the creator. 
  No further addo, may the force be with you!"
  />

  </div>
  </Modal>

  </article>
  <div className="cardlist">
    <a onClick={() => changeRoute('planets')} className='navcard black tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robot' src={planets} width="500px" height="500px" />
      <div>
        <h2>Planets</h2>
      </div>
    </a>    

    <a onClick={() => changeRoute('films')} className='navcard black tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robot' src={movies} />
      <div>
        <h2>Films</h2>
      </div>
    </a>    

    <a onClick={() => changeRoute('characters')} className='navcard black tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robot' src={characters} />
      <div>
        <h2>Characters</h2>
      </div>
    </a>
  
  </div>
  </div>
  )

export default Home;