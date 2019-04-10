import React from 'react'
import Crawl from 'react-star-wars-crawl'
import 'react-star-wars-crawl/lib/index.css'
import Modal from 'react-awesome-modal';

const Film = ({film, openModal, closeModal, isVisible}) => {

// Transforms number into Roman
const romanize = (num) => {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
}

    return (
      <article className="pb5">
  <header className="tc-l ph3 ph4-ns pt4 pt5-ns">
    <h1 className="f3 f2-m f-subheadline-l yellow measure lh-title fw1 mt0">
    {`Episode ${romanize(film.film.episode_id)}: ${film.film.title}`}</h1>
    <h1 className="f5 yellow f4-l db fw1 mb4">
      {`Release date: ${film.film.release_date}`}
    </h1>
  </header>
  <div className="ph3 ph4-m ph5-l">
    <div className="measure db center f5 f4-ns lh-copy">
      <p className="yellow">
        {film.film.opening_crawl}
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
            title={`Episode ${romanize(film.film.episode_id)}`}
            subTitle={film.film.title}
            text={film.film.opening_crawl}
            />
    </div>
   </Modal>
    
</article>
        );
      }
export default Film;