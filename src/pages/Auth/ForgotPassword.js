import FormGroup from '../../components/UI/FormGroup/FormGroup';
import AuthLayout from '../../layout/Auth/Auth';

const ForgotPassword = () => {
  return (
    <AuthLayout
      title="Forgot your password?"
      info="Enter your email address to continue."
    >
      <form>
        <FormGroup
          label="Email"
          type="email"
          placeholder="Email Address"
          //   value={'mayowad43@gmail.com'}
        />
      </form>
    </AuthLayout>
  );
};
export default ForgotPassword;
