import React from 'react'
import './about.css';
import underline from '../images/underline.png'
import whiteTriangle from '../images/white-triangle.png'
import resume from '../images/resume.pdf';

export default class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <div className='about__content-wrapper'>
        <div className='about__header-wrapper'>
        <h1 className='about__header'>About</h1>
          <img 
            src={underline} 
            className='about__image' 
            alt=''
          />
          </div>
          <p className='about__description'>Front End developer with a passion for creating <span className='about__text-color'>functional</span> and <span className='about__text-color'>elegant</span> experiences for the web. I've worked on professional projects for clients such as <span className='about__text-color'>Nike</span>, <span className='about__text-color'>Anheuser-Busch</span>, <span className='about__text-color'>Converse</span> and <span className='about__text-color'>Disney</span>. 
</p> 
          <p className='about__description'>I'm very good at <span className='about__text-color'>React.js</span>, <span className='about__text-color'>Sass</span>, <span className='about__text-color'>UI/UX design</span> and <span className='about__text-color'>animations</span>.
          <p className='about__description'> Check out my <a href={resume} download>resumé</a>.</p>
        </p>
          <img
            src={whiteTriangle}
            className='about__white-triangle'
            alt=''
          />
          <img
            src={whiteTriangle}
            className='about__white-triangle about__white-triangle--two'
            alt=''
          />
          <img
            src={whiteTriangle}
            className='about__white-triangle about__white-triangle--three'
            alt=''
          />
      </div>
      </div>
    )
  }
}