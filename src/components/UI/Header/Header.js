import Logo from '../../../assets/logo.png';
import Navigation from '../Navigation/Navigation';
import classes from './Header.module.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Higher order component
const Header = (props) => {
  const location = useLocation();

  const [cssStyle, setCssStyle] = useState([classes.header]);

  useEffect(() => {
    if (location.pathname === '/') setCssStyle([classes.header, classes.home]);
    else if (location.pathname === '/login')
      setCssStyle([classes.header, classes.login]);
    else setCssStyle([classes.header, classes.default]);
  }, [location]);

  return (
    <header className={cssStyle.join(' ')}>
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
