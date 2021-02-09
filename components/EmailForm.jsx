import { useState } from 'react';
import { useRouter } from 'next/router';
import { v4 as uuid } from 'uuid';
import fetch from 'isomorphic-unfetch';

import FormInput from './FormInput';

import fire from '../config/firebase-config';

import {
  contentContainer,
  formContainer,
  title,
  signUpForm,
  submitButton,
} from '../styles/Form.module.css';

const taglines = {
  customKetoDiet: 'Deliciously Easy Keto Recipes',
  clickWealthSystem: 'Ultimate Guide On How To Build A Profitable Email List',
};
const EmailForm = ({ offerKey, offerLink }) => {
  const [formState, setFormState] = useState({
    id: null,
    name: '',
    email: '',
  });
  const { name, email } = formState;
  const router = useRouter();

  const handleChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const leadId = uuid();
    const leadAcquiredAt = Date.now();

    fire.firestore().collection(offerKey).doc(leadId).set({
      name,
      email,
      leadAcquiredAt,
      lastMessageRecieved: leadAcquiredAt,
    });

    // const sendEmail = async () => {
    //   const res = await fetch('/api/email', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name, email, offerKey }),
    //   });

    //   return res;
    // };

    // const response = await sendEmail();
    const response = { status: 200 };
    if (response.status === 200)
      router.push({
        pathname: `/download`,
        query: { offerKey, offerLink },
      });

    setFormState({ name: '', email: '' });
  };

  return (
    <div className={contentContainer}>
      <div className={formContainer}>
        <h1 className={title}>
          <span style={{ color: 'green' }}>Free</span> Ebook
        </h1>
        <h3 style={{ textAlign: 'center', width: '80%' }}>
          {taglines[offerKey]}
        </h3>
        <form className={signUpForm} onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
            label='Name (Optional)'
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <button
            style={{ fontFamily: 'Roboto', fontSize: '1.5rem' }}
            className={submitButton}
            type='submit'
          >
            Get Yours Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
