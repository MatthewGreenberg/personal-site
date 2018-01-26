import React from 'react'
import ReactGA from 'react-ga';
import classnames from 'classnames';
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
  clearCounter
} from '../../modules/counter'
import purpleTriangle from './images/purple-triangle.png';

class Home extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-113127145-1');
    ReactGA.pageview(window.location.href);
  }
  
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
  handleImageClick() {
    if (this.props.count < 4){
      this.props.increment();      
    } else {
      this.props.clearCounter();
    }
    ReactGA.event({
      category: 'Interaction',
      action: 'Clicked Triangle',
    });
  }
 
  render() {
    const homeWrapperClass = classnames('home', {
      'home--template-1': this.props.count === 1,
      'home--template-2': this.props.count === 2,
      'home--template-3': this.props.count === 3,
      'home--template-4': this.props.count === 4,
    })
    const headerLinkClass = classnames('header__link', {
      'header__link--template-1': this.props.count === 1,
      'header__link--template-2': this.props.count === 2,
      'header__link--template-3': this.props.count === 3,
      'header__link--template-4': this.props.count === 4,
    })  
    const homeHeaderClass = classnames('home__header', {
      'home__header--template-1': this.props.count === 1,
      'home__header--template-2': this.props.count === 2,
      'home__header--template-3': this.props.count === 3,
      'home__header--template-4': this.props.count === 4,
    });  
     const homeSubHeaderClass = classnames('home__sub-header', {
      'home__sub-header--template-1': this.props.count === 1,
      'home__sub-header--template-2': this.props.count === 2,
      'home__sub-header--template-3': this.props.count === 3,
      'home__sub-header--template-4': this.props.count === 4,
    }); 
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <div className={homeWrapperClass}>
          <header className='header'>
            <Link 
              className={headerLinkClass}
              duration={500}
              delay={100}
              smooth={true}
              to='work'
            >
              Work
            </Link>
            <Link 
              className={headerLinkClass}
              duration={750}
              delay={100}
              smooth={true}
              to='about'
            >
              About
            </Link>
            <a 
              className={headerLinkClass}
              onClick={this.scrollToBottom}
            >
              Contact
            </a>
          </header>
          <div className='home__header--wrapper'>
            <h1 className={homeHeaderClass}>Matt Greenberg</h1>
            <h2 className={homeSubHeaderClass}>Creative Developer</h2>
            <img 
              className='home__header-triangle' 
              src={purpleTriangle}
              onClick={() => this.handleImageClick()}
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
  clearCounter,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)