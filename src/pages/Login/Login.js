import FormGroup from '../../components/UI/FormGroup/FormGroup';
import AuthLayout from '../../layout/Auth/Auth';

const Login = () => {
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
          //   value={'mayowad43@gmail.com'}
        />
        <FormGroup
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
      </form>
    </AuthLayout>
  );
};
export default Login;
