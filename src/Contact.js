
import React from 'react';

function Contact() {
  return (
    <section className="container mt-5">
      <h2 className="page-heading">Contact Me</h2>
      <ul className="page-heading" style={{listStyleType: 'none'}}>
        <li>
          You can reach me at:
        </li>
        <li>
          <i>Email:</i> <a href="mailto:tcdle137@gmail.com">tcdle137@gmail.com</a>
        </li>
        <li>
          <i>LinkedIn:</i> <a href="https://www.linkedin.com/in/tcdle137">www.linkedin.com/in/tcdle137</a>
        </li>
        <li>
          <i>GitHub:</i> <a href="https://github.com/tcdle137">github.com/tcdle137</a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
