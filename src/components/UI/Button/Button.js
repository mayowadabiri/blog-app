import './button.css';

const Button = ({ children, type, isLoading }) => {
  return (
    <button className={'button'} type={type}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
