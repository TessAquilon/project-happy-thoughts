/* eslint-disable linebreak-style */
import React from 'react';

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <p className="footer-text">Created by Tess Aquilon 2023</p>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/tess-aquilon/" target="_blank" rel="noreferrer"> <i className="fa fa-linkedin fa-lg" /></a>
        <span className="sr-only">LinkedIn</span>
        <a href="https://github.com/TessAquilon" target="_blank" rel="noreferrer"> <i className="fa fa-github fa-lg" /></a>
        <span className="sr-only">GitHub</span>
      </div>
    </div>
  )
}