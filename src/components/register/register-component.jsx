import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/user.context';
import { createAuthUser, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './register.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const RegisterForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

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

      setCurrentUser(user);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (e) {
      if (e.code === 'auth/email-already-in-use') {
        alert('email already in use')
      } else {
        console.log('an exeption with user creation:', e)
      }
    }
  }


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className='register-container'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>

        <FormInput label='Display Name' type='text' required onChange={handleChange} name="displayName" value={displayName} />


        <FormInput label='Email' type='email' required onChange={handleChange} name="email" value={email} />


        <FormInput label='Password' type='password' required onChange={handleChange} name="password" value={password} />

        <FormInput label='Confirm Password' type='password' required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default RegisterForm;