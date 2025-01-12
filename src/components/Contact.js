import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedinIn, faGithub, faWeixin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => (
  <section className="container mx-auto p-8 my-8 bg-white rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
    <div className="flex space-x-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://wechat.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWeixin} />
      </a>
    </div>
  </section>
);

export default Contact;