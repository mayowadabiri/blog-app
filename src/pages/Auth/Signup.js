import { useState } from 'react';
import FormGroup from '../../components/UI/FormGroup/FormGroup';
import AuthLayout from '../../layout/Auth/Auth';
import Button from '../../components/UI/Button/Button';
import axios from 'axios';

const SignUp = (props) => {
  console.log(props);
  const [signupForm, setSignupForm] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const changeHandler = (evt, type) => {
    setSignupForm({
      ...signupForm,
      [type]: evt.target.value.trim(),
    });
  };

  const handleSubmit = (evt) => {
    setLoading(true);
    evt.preventDefault();
    axios
      .post('http://localhost:4002/api/v1/auth/signup', signupForm)
      .then((res) => {
        setLoading(false);
        props.history.push('/');
      })
      .catch((err) => {
        setLoading(false);
        const error = 'Error processing your request';
        if (err.response) {
          setErrorMsg(err.response.data.message);
        } else {
          setErrorMsg(error);
        }
      });
  };

  return (
    <AuthLayout
      title="Register your account"
      info="Enter your details to continue"
    >
      {errorMsg !== '' && (
        <p style={{ color: 'red', textAlign: 'center', marginBottom: '16px' }}>
          {errorMsg}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <FormGroup
          label="Full Name"
          type="text"
          placeholder="Jane Doe"
          name="FullName"
          value={signupForm.fullName}
          onChange={(event) => changeHandler(event, 'fullName')}
          required={true}
        />
        <FormGroup
          label="Username"
          type="text"
          placeholder="@janedoe"
          value={signupForm.username}
          name="username"
          onChange={(event) => changeHandler(event, 'username')}
          required={true}
        />
        <FormGroup
          label="Email"
          type="email"
          placeholder="Email Address"
          value={signupForm.email}
          name="email"
          onChange={(event) => changeHandler(event, 'email')}
          required={true}
        />
        <FormGroup
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={signupForm.password}
          name="password"
          onChange={(event) => changeHandler(event, 'password')}
          required={true}
          minLength={6}
          maxLength={20}
        />
        <Button isLoading={loading} type="submit">
          Register
        </Button>
      </form>
    </AuthLayout>
  );
};
export default SignUp;
