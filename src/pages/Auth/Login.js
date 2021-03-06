import FormGroup from '../../components/UI/FormGroup/FormGroup';
import AuthLayout from '../../layout/Auth/Auth';
import Button from '../../components/UI/Button/Button';
import { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../App';

const Login = (props) => {
  const { setIsLoggedIn } = useContext(UserContext);

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (evt, type) => {
    setLoginForm({
      ...loginForm,
      [type]: evt.target.value,
    });
  };
  const [errorMsg, setErrorMsg] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = (evt) => {
    setLoading(true);
    evt.preventDefault();
    axios
      .post('http://localhost:4002/api/v1/auth/signin', {
        username: loginForm.email.trim(),
        password: loginForm.password,
      })
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem('token', res.data.token);
        setLoading(false);
        setIsLoggedIn(true);
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
      title="Login to your account"
      info="Enter your email address and password to continue."
    >
      {errorMsg !== '' && (
        <p style={{ color: 'red', textAlign: 'center', marginBottom: '16px' }}>
          {errorMsg}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <FormGroup
          label="Email"
          type="text"
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
        <Button isLoading={loading} type="submit">
          Login
        </Button>
      </form>
    </AuthLayout>
  );
};
export default Login;
