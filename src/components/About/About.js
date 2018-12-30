import React from 'react'

// Import the necessary styles, or include them another way with your build process
import './About.css'

const About = () => {
    return (
      <article data-name="article-full-bleed-background ml5">
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
                with Symfony (PHP framework), Docker, databases, WS and a 
                little of Angular. In my spare time, I make fun apps like
                this one.
              </p>
              <p className="portfolio tracked white lh-copy measure f2 mt0">
                <a href='http://Carls13.github.io/mypage' target='_blank'>
                Check out my full portfolio page</a>
              </p>

            </section>
          </div>
        </div>
      </article>)
      };

export default About;