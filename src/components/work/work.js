import React from 'react';
import './work.css';
import Project from '../project/project';
import aboutImage from '../images/about-image.svg';
import whiteTriangle from '../images/white-triangle.png';
import underline from '../images/underline.png';
import tackleImpossible from '../images/tackle-impossible.png';
import yoGotti from '../images/yo-gotti.png';
import nike from '../images/nike.png';
import toDo from '../images/todo-list.png';
import drumMachine from '../images/drum-machine.png';

export default class Work extends React.Component {
  render() {
    return (
      <div className='work'>
        <div className='work__content-wrapper'>
          <h1 className='work__header'>Work</h1>
          <img 
            src={underline} 
            className='work__image'
            alt=''
          />
          <img
            src={whiteTriangle}
            className='work__image-white-triangle'
            alt=''
          />
          <img
            src={whiteTriangle}
            className='work__image-white-triangle work__image-white-triangle--second'
            alt=''
          />
          <img
            src={whiteTriangle}
            className='work__image-white-triangle work__image-white-triangle--third'
            alt=''
          />
        </div>
        <Project
          title='Drum Machine'
          subTitle='Front End / Design / Greensock.js'
          description='Expiriment with the greensock animation library and the web audio API.'
          image={drumMachine}
          switchImage={false}
          viewProject={true}
          projectUrl='https://codepen.io/mattgreenberg/pen/dObVvw'
        />
        <Project
          title='Flux Implementation To Do List '
          subTitle='React / Animations / Flux Implementation'
          description='Experiment for animations within a React.js and Flux front-end framework'
          image={toDo}
          switchImage={true}
          viewProject={true}
          projectUrl='https://codepen.io/mattgreenberg/pen/ypeGZv'
        />
        <Project
          title='Nike Tech Knit'
          subTitle='Front End / D3.js / Design'
          description='To promote Nikes new Tech Knit line of clothing, I helped build an interactice site which displays meta-data information about two individuals day wearing the clothing. For the site, I used D3.js to visualize heart-rate information. I also developed an algorithm which translates temperature into an interactive color gradient.'
          image={nike}
          switchImage={false}
        />
        <Project 
          title='Anheuser-Busch -- Tackle Impossible'
          subTitle='Full Stack / React / Responsive Optimization' 
          description='Tackle Impossible was a project for Anheuser-Buschs campaign against drunk driving. Within the React.js front end, I built out components for the client-facing app and admin pages. I also created routes to register users and save their projects within the Mongo DB database.'
          image={tackleImpossible}
          switchImage={true}
        />
        <Project
          title='Yo Gotti -- The Art of the Hustle'
          subTitle='Front End / Animations / Responsive Optimization'           
          description='The Art of the Hustle is an interactive board game created for rapper Yo Gotti. I contributed heavily to the Front-End development as well as the Object Oriented JS structure running the game and leaderboard logic.'
          image={yoGotti}
          switchImage={false}
        />
      </div>
    );
  }
}