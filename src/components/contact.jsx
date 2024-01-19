import React from 'react';

function contact() {
  return (
    <div className="contact-me" id="Contact">
      <h2 className="primary-text-contact-me"> Contact me</h2>
      <p className="secondary-text-contact">
        If you have an application you are interested in developing, a feature that
        you need built or a project that needs coding. I’d love to help with
      </p>
      <form id="formContact" className="form-contact-me" action="https://formspree.io/f/xbjelnar" method="POST">
        <div className="form-field">
          <label htmlFor="name" />
          <input className="input" name="name" id="name" type="text" placeholder="Enter your name" />
          <small />
        </div>
        <div className="form-field">
          <label htmlFor="email" />
          <input className="input" name="email" id="e-mail" type="text" placeholder="Enter your email" />
          <small />
        </div>
        <div className="form-field">
          <label htmlFor="message" />
          <textarea className="input" name="message" id="message" placeholder="Write your message here" />
          <small />
        </div>
        <div id="form-field-btn">
          <input className="submit-button" id="formSubmit" value="Get in touch" type="submit" />
          <small id="Error" />
        </div>
      </form>
    </div>
  );
}

export default contact;
