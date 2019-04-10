import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Home from './components/Home/Home';
import Films from './components/Films/Films';
import Characters from './components/Characters/Characters';
import Planets from './components/Planets/Planets';
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
    this.setState({visible : true});
  }

 componentDidMount(){
    }
  closeModal = () => {
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
      body = <Characters/>;
      break;
    case 'planets':
      body = <Planets/>;
      break;
    case 'films':
      body = <Films 
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
        <Footer/>  
      </div>
    );
  }
}
export default App;

