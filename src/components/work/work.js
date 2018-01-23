import React from 'react';
import './work.css';
import Project from '../project/project';
import aboutImage from '../images/about-image.svg';
import whiteTriangle from '../images/white-triangle.png';
import underline from '../images/underline.png';
import tackleImpossible from '../images/tackle-impossible.png';
import yoGotti from '../images/yo-gotti.png';
import nike from '../images/nike.png';
import albert from '../images/albert.png';
import toDo from '../images/todo-list.png';
import drumMachine from '../images/drum-machine.png';

export default class Work extends React.Component {
  render() {
    return (
      <div className='work'>
        <div className='work__content-wrapper'>
          <div className='work__header-wrapper'>
            <h1 className='work__header'>Work</h1>
            <img 
              src={underline} 
              className='work__image'
              alt=''
            />
            </div>
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
          title='Albert.io'
          subTitle='Front End / Design / Flux Implementation'
          description='Front end developer for two years working exclusively with react and flux implementations. Albert is an interactive learning platform.'
          image={albert}
          switchImage={false}
          viewProject={true}
          projectUrl='https://www.albert.io/'
        />
        <Project
          title='Drum Machine'
          subTitle='Front End / Design / Greensock.js'
          description='Experiment with the greensock animation library and the web audio API.'
          image={drumMachine}
          switchImage={true}
          viewProject={true}
          projectUrl='https://codepen.io/mattgreenberg/pen/dObVvw'
        />
        <Project
          title='Flux Implementation To Do List '
          subTitle='React / Animations / Flux Implementation'
          description='Experiment for animations within a React.js and Flux front-end framework'
          image={toDo}
          switchImage={false}
          viewProject={true}
          projectUrl='https://codepen.io/mattgreenberg/pen/ypeGZv'
        />
        <Project
          title='Nike Tech Knit'
          subTitle='Front End / D3.js / Design'
          description='Nike Tech Knit was an interactice site that displayed meta-data information about two individuals day wearing the clothing. For the site, I used react and D3.js to visualize heart-rate information. I also developed an algorithm which translated temperature into an interactive color gradient.'
          image={nike}
          switchImage={true}
        />
        <Project 
          title='Anheuser-Busch -- Tackle Impossible'
          subTitle='Full Stack / React / Responsive Optimization' 
          description='Tackle Impossible was a project for Anheuser-Buschs campaign against drunk driving. Within the React.js front end, I built out components for the client-facing app and admin pages. I also created routes to register users and save their projects within the Mongo DB database.'
          image={tackleImpossible}
          switchImage={false}
        />
        <Project
          title='Yo Gotti -- The Art of the Hustle'
          subTitle='Front End / Animations / Responsive Optimization'           
          description='The Art of the Hustle was an interactive board game created for rapper Yo Gotti. I contributed heavily to the Front-End development as well as the Object Oriented JS structure running the game and leaderboard logic.'
          image={yoGotti}
          switchImage={true}
        />
      </div>
    );
  }
}