/* eslint-disable linebreak-style */
import React from 'react';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer role="contentinfo">
      <hr className="divider" />
      <p>A website created by Nino Aquilon @Technigo &apos;23.</p>
      <section className="contact">
        <a href="https://github.com/codeandjazz" className="button icon-button no-glow" aria-label="Go to my Github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/ninoaquilon/" className="button icon-button no-glow" aria-label="Go to my LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </section>
    </footer>
  )
}