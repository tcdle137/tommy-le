"use client";
import { useState, FormEvent } from "react";

import github from '../../public/githubLogo.png';
import linkedin from '../../public/linkedinLogo.png';

export default function Contact() {
  const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted email:", email);
      setSubmitted(true);
      // i think this is where i call the google api to send me an email
    };

  return (
    <div className='container'>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <div className='contact-header'>
          <h1 style={{fontSize: '6rem', fontFamily: 'LibreBarcode'}}>Contact</h1>
          <p>Contact form coming soon!</p>
        </div>
        <div className='contact-sections'>
          <div className='contact-email-form'>
            {submitted ? (
              <p>Thanks! We'll be in touch at {email}.</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                />
                <button type="submit">Subscribe</button>
              </form>
            )}
          </div>
          <div className='contact-contents'>
            <a href="https://www.linkedin.com/in/tcdle137">
              <img src={linkedin.src} alt="LinkedIn" style={{width: '5rem', height: '5rem', margin: '1rem'}} />
            </a>
            <a href="https://github.com/tcdle137">
              <img src={github.src} alt="GitHub" style={{width: '5rem', height: '5rem', margin: '1rem'}} />
            </a>
          </div>
        </div>
      </div>
      {/*
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
      */}
    </div>
  );
}
