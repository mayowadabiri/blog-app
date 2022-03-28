import FormGroup from '../../components/UI/FormGroup/FormGroup';
import AuthLayout from '../../layout/Auth/Auth';

const SignUp = () => {
  return (
    <AuthLayout
      title="Register your account"
      info="Enter your details to continue"
    >
      <form>
        <FormGroup
          label="Full Name"
          type="text"
          placeholder="Jane Doe"
          //   value={'mayowad43@gmail.com'}
        />
        <FormGroup
          label="Username"
          type="text"
          placeholder="@janedoe"
          //   value={'mayowad43@gmail.com'}
        />
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
          //   value={'mayowad43@gmail.com'}
        />
      </form>
    </AuthLayout>
  );
};
export default SignUp;
