import { faCircleQuestion, faBook, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Description from '../Description';
import './index.scss';

function About() {
  const tabs = ['Describe', 'Skill', 'Education'];
  const icon = {
    Describe: faCircleQuestion,
    Skill:  faBook,
    Education: faGraduationCap 
  }

  const [type, setType] = useState('Describe');


  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>About me</h1>

        <div className="desc-field">
          <div className="desc-btn-bar">
            {tabs.map(tab => (
              <Link   key={tab} 
                      to={tab}
                      className="desc-btn" 
                      onClick={() => setType(tab)} 
                      style={{backgroundColor: tab === type ? 'rgba(61, 61, 61, 0.5)' : ''}}>
                {tab}
                <FontAwesomeIcon icon={icon[tab]} />
              </Link>  
            ))}
          </div>
            <Outlet/>
        </div>

      </div>
    </div>
  )
}

export default About