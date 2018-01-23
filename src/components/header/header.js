import React from 'react';
import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <a className='header__link'>Work</a>
        <a className='header__link'>About</a>
        <a className='header__link'>Contact</a>
      </div>
    );
  }
}