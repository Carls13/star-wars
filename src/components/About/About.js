import React from 'react'

// Import the necessary styles, or include them another way with your build process
import './About.css'

const About = () => {
    return (
  <article class="bg-black">
    <div class="vh-100 cover bg-center main"></div>
    <div class="ph4 ph5-m ph6-l">
      <div class="pv5 f4 f2-ns measure center">
        <h1 class="fw6 f1 fl w-100 black-70 mt0 mb3 avenir yellow">Carlos Samuel Hernández</h1>
        <p class="tl f6 yellow">
          Valencia, Venezuela
        </p>
        <p class="white db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville">
          Engineering student and Web Developer. I'm 20 years old. 
                
                I currently work as Full Stack Developer 
                at <a href='http://girosvenezuela.com' target='_blank'>
                GirosVenezuela</a>, where I've gotten experience 
                with Symfony (PHP framework), Docker, databases, WS and AngularJS. In my spare time, I make fun apps like
                this one.
        </p>
        <p class="white db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville">
          This app was made with ReactJS, using Redux reducers.
           It requests to swapi.co and recovers data about Star Wars planets,
            films and people. Please, make a stop and give them a support for 
            the project that it's pretty cool!
        </p>
        <p class="white db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville">
          In the design hand, I'm using the Tachyons library, making a lot 
          easier the components building. You can check it out, right here: .
          I'll also leave you the link of this project's repository on Github:
          . If you have any doubt you can contact me and I will be glad to help
          you.
        </p>
      </div>
      <img src="http://mrmrs.github.io/photos/005.jpg" class="db w-100"/>
      
    </div>
  </article>      )
      }
export default About;

      {/*<article data-name="article-full-bleed-background ml5">
        <div className="cf">
          <div className="fl pa3 pa4-ns bg-black black-70 measure-narrow f3 times">
            <header className="bb b--black-70 pv2">
              <h3 className="f2 fw7 white ttu tracked lh-title mt0 mb3 avenir">Carlos Samuel Hernández</h3>
              <h4 className="f3 fw4 yellow i lh-title mt0">Valencia, Venezuela</h4>
            </header>
            <section className="pt2 pb4">
              <p className="tracked white lh-copy measure f2 mt0">
                Engineering student and Web Developer. I'm 20 years old. 
                I made this page as part of practicing with the ReactJS 
                library, especially encouraged from Andrei Neagoie's Zero 
                to Mastery Udemy Course. This page makes requests to swapi.co 
                and recovers data about Star Wars universe.
              </p>
              <p className="tracked white lh-copy measure f2 mt0">
                I currently work as Full Stack Developer 
                at <a href='http://girosvenezuela.com' target='_blank'>
                GirosVenezuela</a>, where I've gotten experience 
                with Symfony (PHP framework), Docker, databases, WS and AngularJS. In my spare time, I make fun apps like
                this one.
              </p>
              <p className="portfolio tracked white lh-copy measure f2 mt0">
                <a href='http://Carls13.github.io/mypage' target='_blank'>
                Check out my full portfolio page</a>
              </p>

            </section>
          </div>
        </div>
      </article>*/}