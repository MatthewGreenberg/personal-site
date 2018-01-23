import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import About from '../about/about';
import Work from '../work/work';
import Contact from '../contact/contact';
import * as Scroll from 'react-scroll';
import { Link, Element, animateScroll as scroll, scroller } from 'react-scroll';
import './home.css'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'
import purpleTriangle from './images/purple-triangle.png';

class Home extends React.Component {
  scrollToBottom = () => {
    scroll.scrollToBottom({duration: 1500});
  }
  scrollTowork = () => {
    scroller.scrollTo('work', {
      duration: 1000,
      delay: 100,
      smooth: true,
      containerId: 'work',
  })
  }
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <div className='home' >
        <div id="container"></div>
        <header className='header'>
          <Link 
            className='header__link'
            duration={500}
            delay={100}
            smooth={true}
            to='work'
          >
            Work
          </Link>
          <Link 
            className='header__link'
            duration={750}
            delay={100}
            smooth={true}
            to='about'
          >
            About
          </Link>
          <a 
            className='header__link'
            onClick={this.scrollToBottom}
          >
            Contact
          </a>
        </header>
          <div className='home__header--wrapper'>
            <h1 className='home__header'>Matt Greenberg</h1>
            <h2 className='home__sub-header'>Creative Developer</h2>
            <img 
              className='home__header-triangle' 
              src={purpleTriangle}
            />
          </div>
        </div>
        <Element name='work'>
          <Work />
        </Element>
        <Element name='about'>
          <About />
        </Element>
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