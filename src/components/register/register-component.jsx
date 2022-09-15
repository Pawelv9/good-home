import { useState } from 'react';
import { createAuthUser, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const RegisterForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await createAuthUser(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (e) {
      if (e.code === 'auth/email-already-in-use') {
        alert('email already in use')
      } else {
        console.log('exeption with user creation:', e)
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>

        <FormInput label='Display Name' type='text' required onChange={handleChange} name="displayName" value={displayName} />


        <FormInput label='Email' type='email' required onChange={handleChange} name="email" value={email} />


        <FormInput label='Password' type='password' required onChange={handleChange} name="password" value={password} />

        <FormInput label='Confirm Password' type='password' required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;