import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Home from './components/Home/Home';
import Films from './components/Films/Films';
import { connect } from 'react-redux';
import { requestFilms } from './actions.js';
import './App.css'


class App extends Component {


  constructor(){
    super();
    this.state = {
      route:'home',
      visible:false
          }
  }

  changeRoute = (route) =>{
    this.setState({route: route});
  }

  openModal = () =>  {
    console.log(this.state.visible)
    this.setState({visible : true});
  }

 componentDidMount(){
    }
  closeModal = () => {
    console.log(this.state.visible)
    this.setState({visible : false});
    }

  render() {
   const { route } = this.state;

    let body = '';

   switch(route){
    case 'home':
      body = <Home 
        openModal={this.openModal} 
        closeModal={this.closeModal}
        isVisible={this.state.visible}
        changeRoute={this.changeRoute} />
      break;
    case 'characters':
      body = <h1 className='yellow'>Characters</h1>;
      break;
    case 'planets':
      body = <h1 className='yellow'>planets</h1>;
      break;
    case 'films':
      const { films, isFilmsPending } = this.props;
      body = <Films 
        //films={films} 
        openModal={this.openModal} 
        closeModal={this.closeModal}
        isVisible={this.state.visible}

      />;
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
            <Films/>
            <Planets/>
          </div>
*/}        
        <Footer/>  
      </div>
    );
  }
}
export default connect()(App);

