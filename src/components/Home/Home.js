import React from 'react'
import Crawl from 'react-star-wars-crawl'

// Import the necessary styles, or include them another way with your build process
import 'react-star-wars-crawl/lib/index.css'

const Home = () => (
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
)

export default Home;