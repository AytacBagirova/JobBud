// HomePage.js

import React from 'react';
import Layout from '../../components/Layout/Layout';
import Typewriter from 'typewriter-effect';
import './HomePage.css';

const HomePage = () => (
  <Layout>
    <div className="home-container">
      <div className="hero-section">
      <h1 className="hero-title">
      <span style={{ fontStyle: 'italic' }}> JobBud.</span>

        </h1>
        <div className="typewriter-container">
          <p className="hero-subtitle">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Exciting job opportunities.')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Talented freelancers.')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Start your career journey with us!')
                  .pauseFor(1000)
                  .start();
              }}
              options={{
                delay: 50,
                deleteSpeed: 30,
                cursor: '_',
              }}
              className="typewriter-text"
            />
          </p>
        </div>
        <div className="join-us-button">
          <a href="/register" className="join-button">Join Us Now!</a>
        </div>
      </div>
    </div>
  </Layout>
);

export default HomePage;
