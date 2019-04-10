import React from 'react'
import img from './myself.jpg'

// Import the necessary styles, or include them another way with your build process
import './About.css'

const About = () => {
  return (
    <article class="bg-black">
    <img className="card-image"
        alt='Me' src={img} width='75%' />
    <div class="ph4 ph5-m ph6-l">
    <div class="pv5 f4 f2-ns measure center">
    <h1 class="fw6 f1 fl w-100 black-70 mt0 mb3 yellow">Carlos Samuel Hernández</h1>
    <p class="white db lh-copy black-70 fw1 mv0 f4 f3-m f2-l measure">
    Engineering student and Web Developer. I'm 21 years old. 

    I currently work as Full Stack Developer 
    at <a href='http://girosvenezuela.com' target='_blank'>
    GirosVenezuela</a>, where I've gotten experience 
    with Symfony (PHP framework), Docker, databases, WS and AngularJS. In my spare time, I make fun apps like
    this one.
    </p>
    <br>
      
    </br>
    <p class="white db lh-copy black-70 fw1 mv0 f4 f3-m f2-l measure">
    This app was made with ReactJS.
    It makes requests to swapi.co and recovers data about Star Wars planets,
    films and people. Please, make a stop and give them a support for 
    the project that it's pretty cool!
    </p>
    <br>
      
    </br>
    <p class="white db lh-copy black-70 fw1 mv0 f4 f3-m f2-l measure">
    In the design hand, I'm using the Tachyons library, making a lot 
    easier the components building. You can check it out, <a href='http://tachyons.io/' target='_blank'>
    right here</a>.
    I'll also leave you the link of <a href='https://github.com/Carls13/star-wars' target='_blank'>
    this project's repository on Github</a> (check the No-Redux branch,
      don't ask where the name came from haha)
    . If you have any doubt you can contact me and I will be glad to help
    you.
    </p>
    <br>
    </br>
    <p class="white db lh-copy black-70 fw1 mv0 f4 f3-m f2-l measure">
    I've also written <a href='https://link.medium.com/REMuE37JcU' target='_blank'>a Medium article </a> 
    describing a little the process of making this app.
     Check it out!
    </p>

    </div>
    </div>
    </article>      )
}
export default About;

