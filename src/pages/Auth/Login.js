import FormGroup from '../../components/UI/FormGroup/FormGroup';
import AuthLayout from '../../layout/Auth/Auth';
import Button from '../../components/UI/Button/Button';
import { useState } from 'react';

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (evt, type) => {
    setLoginForm({
      ...loginForm,
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
  w;

  return (
    <AuthLayout
      title="Login to your account"
      info="Enter your email address and password to continue."
    >
      <form>
        <FormGroup
          label="Email"
          type="email"
          placeholder="Email Address"
          name="email"
          onChange={(event) => changeHandler(event, 'email')}
          required={true}
        />
        <FormGroup
          label="Password"
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={(event) => changeHandler(event, 'password')}
          required={true}
          minLength={6}
          maxLength={20}
        />
        <Button>Login</Button>
      </form>
    </AuthLayout>
  );
};
export default Login;
