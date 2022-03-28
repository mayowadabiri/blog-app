import Logo from '../../../assets/logo.png';
import Navigation from '../Navigation/Navigation';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header_container}>
        <div className={classes.header_logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
