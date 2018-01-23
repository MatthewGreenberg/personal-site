import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../header/header';
import About from '../about/about';
import Work from '../work/work';
import Contact from '../contact/contact';


import './home.css'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'
import mainTriangle from './images/main-triangle.svg';
import blueTriangle from './images/blue-triangle.svg';
import greenTriangle from './images/green-triangle.svg';
import yellowTriangle from './images/yellow-triangle.svg';
import purpleTriangle from './images/purple-triangle.png';

class Home extends React.Component {
  /* On component Did mount animate the triange */
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <div className='home' >
          <Header />
          <div className='home__header--wrapper'>
            <h1 className='home__header'>Matt Greenberg</h1>
            <h2 className='home__sub-header'>Creative Developer</h2>
            <img 
              className='home__header-triangle' 
              src={purpleTriangle}
            />
          </div>
        </div>
        <Work />
        <About />
        <Contact />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)