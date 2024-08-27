// src/Components/VideoTranslatorPage.js
import React from 'react';
import './VideoLang.css';

const VideoTranslatorPage = () => {
  return (
    <div className="container">
      <div className="left-section">
        <h1>Video Language Translator</h1>
        <h3>Experience the future of video translation with Wavel AI! Translate your videos online for free using our advanced AI video translator. Choose from 250+ AI Voices in 30+ languages. Try it now and break language barriers effortlessly</h3>
        <div className="buttons">
          <button className="button">Translate with AI Dubbing &rarr;</button>
        </div>
      </div>
      <div className="right-section">
        <img src="/photo.jpg" alt="Video Translation" />
      </div>
    </div>
  );
};

export default VideoTranslatorPage;
