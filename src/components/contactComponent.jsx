import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, setErrors, selectForm } from '../redux/slices/formSlice';
import styles from '../styles/contact.module.css';

const Contact = () => {
  const dispatch = useDispatch();
  const {
    name, email, text, errors,
  } = useSelector(selectForm);

  const validateField = (field, value) => {
    switch (field) {
      case 'name':
        if (value.trim() === '') return 'Name is required';
        break;
      case 'email':
        if (value.trim() === '') return 'Email is required';
        // eslint-disable-next-line no-case-declarations
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(value)) return 'El correo electrónico no tiene un formato válido.';
        break;
      case 'text':
        if (value.trim() === '') return 'Message is required';
        break;
      default:
        break;
    }
    return null; // Add a default return statement
  };

  const handleInputChange = (field, value) => {
    dispatch(updateField({ field, value }));
    dispatch(setErrors({ ...errors, [field]: validateField(field, value) }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const nameError = validateField('name', name);
    const emailError = validateField('email', email);
    const textError = validateField('text', text);

    dispatch(setErrors({
      name: nameError,
      email: emailError,
      text: textError,
    }));

    if (!nameError && !emailError && !textError) {
      const message = `Name: ${name}\nEmail: ${email}\nMessage: ${text}`;
      // Send the message to WhatsApp
      const whatsappUrl = `https://api.whatsapp.com/send?phone=+593962889699&text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl);
      document.getElementById('formContact').reset();
    }
  };

  return (
    <div className={styles.contactMe} id="Contact">
      <h2 className={styles.primaryTextContactMe}> Contact me</h2>
      <p className={styles.secondaryTextContact}>
        If you have an application you are interested in developing, a feature that
        you need built or a project that needs coding. I’d love to help with
      </p>
      <form id="formContact" className={styles.formContactMe} method="POST" onSubmit={handleFormSubmit}>
        <div className={styles.formField}>
          <input className={styles.input} name="name" id="name" type="text" placeholder="Enter your name" onChange={(e) => handleInputChange('name', e.target.value)} />
          {errors.name && <small className={styles.error}>{errors.name}</small>}
        </div>
        <div className={styles.formField}>
          <input className={styles.input} name="email" id="e-mail" type="text" placeholder="Enter your email" onChange={(e) => handleInputChange('email', e.target.value)} />
          {errors.email && <small className={styles.error}>{errors.email}</small>}
        </div>
        <div className={styles.formField}>
          <textarea className={styles.input} name="message" id="message" placeholder="Write your message here" onChange={(e) => handleInputChange('text', e.target.value)} />
          {errors.text && <small className={styles.error}>{errors.text}</small>}
        </div>
        <div id={styles.formFieldBtn}>
          <input className={styles.submitButton} id="formSubmit" value="Get in touch" type="submit" />
          <small id="Error" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
