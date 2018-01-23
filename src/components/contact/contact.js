import React from 'react';
import underline from '../images/underline.png'
import whiteTriangle from '../images/white-triangle.png'
import triangles from '../images/triangles.png'
import './contact.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <div className='contact__header--wrapper'>
          <h1 className='contact__header'>Contact</h1>
          <img
            src={underline}
            className='about__image'
            alt=''
          />
        </div>
        <p className='contact__sub-header contact__sub-header--question'>Want a wicked fast website or app with pixel perfect implementation? Reach out to me at:</p>
        <p className='contact__email'>
          <a href='mailto:mattcgreenberg@gmail.com'><span className='contact__text-color'>mattcgreenberg</span>@<span className='contact__text-color'>gmail.com</span></a>
        </p>
        <p className='contact__sub-header'>You can find me on:</p>
        <div className='contact__social'>
          <a href="http://codepen.io/mattgreenberg/" target="_blank"><i className="fa fa-codepen"> </i></a><a href="https://linkedin.com/in/mattcgreenberg" target="_blank"><i className="fa fa-linkedin"> </i></a><a href="https://twitter.com/McGreenBeats" target="_blank"><i className="fa fa-twitter"> </i></a><a href="https://github.com/MatthewGreenberg" target="_blank"><i className="fa fa-github"></i></a><a href="mailto:mattcgreenberg@gmail.com?Subject=Hello%20Matt"><i className="fa fa-envelope-o"></i></a>
        </div>
        <img 
          src={triangles}
          className='contact__white-triangle'
          alt='' 
        />
      </div>
    )
  }
}