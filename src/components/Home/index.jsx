import React from 'react';
import './index.scss';

function Home() {
  return (
    <div className="container home-page">
        <div className="text-zone">
            <h1>
                Hi, <br/>
                My name's Binh <br/>
                frontend developer
            </h1>
            <h2>
                Html / Css / JavaScript / ReactJS
            </h2>
            <button class="btn-resume" role="button">My resume</button>
        </div>
    </div>
  )
}

export default Home