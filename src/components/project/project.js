import React from 'react';
import classnames from 'classnames';
import './project.css';

export default class Project extends React.Component {
  generateViewProject() {
    if (!this.props.viewProject) {
      return <p className='project__not-available'>Project is no longer available.</p>;
    }
    return (
      <button 
        className='project__button'
        onClick={() => window.open(this.props.projectUrl)}
      >
        View Project
      </button>
    )
  }
  render() {
    const imageClass = classnames('project__image', {
      'project__image--left': this.props.switchImage
    })
    return (
      <div className='project'>
        <div className='project__content_wrapper'>
          <h1 className='project__title'>{this.props.title}</h1>
          <h2 className='project__sub-title'>{this.props.subTitle}</h2>
          <p className='project__description'>{this.props.description}</p>
          {this.generateViewProject()}
        </div>
        <img 
          className={imageClass}
          src={this.props.image}
        />
      </div>
    );
  }
}