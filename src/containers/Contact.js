import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
//   const form = useForm();
//   console.log("form", form);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const [formData, setFormData] = useState();

  const onSubmit = data => {
    // console.log(data);
    setFormData(data);
  }

//   console.log(watch('FirstName'));
  console.log('errors', errors);

  return (
    <div className="contact-us">
      <div className="ui container">
        <pre>{ JSON.stringify(formData, '', 5) }</pre>
        <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" placeholder="First Name" {...register('FirstName', { required: true, minLength: 3, maxLength: 20 })} />
            <span className="error">{ errors.FirstName?.type === 'required' && 'First name is required' }</span>
          </div>

          <div className="field">
            <label htmlFor="lastname">Last Name</label>
            <input id="lastname" placeholder="Last Name" {...register('LastName', { required: true, maxLength: 20})} />
            <span className="error">{ errors.LastName?.type === 'required' && 'Last name is required' }</span>
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="Email" {...register('Email', { required: true, pattern: /^\S+@\S+$/i, message:'Email is required'})} />
            <span className="error">
                { errors.Email?.type === 'required' && 'Email is required' }
                { errors.Email?.type === 'pattern' && 'Invalid email' }
            </span>
          </div>

          <div className="field">
            <label htmlFor="msg">Message</label>
            <textarea id="msg" rows="4" placeholder="Message" {...register('Message', { required: true })}></textarea>
            <span className="error">{ errors.Message?.type === 'required' && 'Message is required' }</span>
          </div>

          <button className="ui button primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
