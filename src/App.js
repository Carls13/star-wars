import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Home from './components/Home/Home';

class App extends Component {

  constructor(){
    super();
    this.state = {
      route:'about'
          }
  }

  changeRoute = (route) =>{
    this.setState({route: route});
  }

  render() {
   const { route } = this.state;

    let body = '';

   switch(route){
    case 'home':
      body = <Home/>
      break;
    case 'characters':
      body = <h1 className='yellow'>Characters</h1>;
      break;
    case 'planets':
      body = <h1 className='yellow'>planets</h1>;
      break;
    case 'movies':
      body = <h1 className='yellow'>movies</h1>;
      break;
    case 'about':
      body = <About/>
      break;
   }


    return (
      <div className='App'>
        <Navigation changeRoute={this.changeRoute} />
        {body}
        {/*<Scroll>
        </Scroll>*/}

        
          {/*<div>
           <SearchBox/>
            <Characters/>
            <Movies/>
            <Planets/>
          </div>
*/}        
        <Footer/>  
      </div>
    );
  }
}

export default App;
