import { useState } from 'react';
import { createUserDocumentFromAuth, signInAuthUser, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sing-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUser(email, password);
      console.log(response);
      resetFormFields();
    } catch (e) {
      switch (e.code) {
        case 'auth/wrong-password':
          alert('incorrect password');
          break;
        case 'auth/user-not-found':
          alert('user with this email not found');
          break;
        default:
          console.log('an exeption with user sign in:', e);
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className='sign-in-container'>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>

        <FormInput label='Email' type='email' required onChange={handleChange} name="email" value={email} />

        <FormInput label='Password' type='password' required onChange={handleChange} name="password" value={password} />
        <div className='buttons-container'>
          <Button type="submit">Sign In</Button>
          <Button buttonType='google' onClick={signInWithGoogle}>Google</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;