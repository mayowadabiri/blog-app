import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav_ul">
        <li className="nav_li">
          <Link className="nav_link">Home</Link>
        </li>
        <li className="nav_li">
          <Link className="nav_link">Posts</Link>
        </li>
        <li className="nav_li">
          <Link className="nav_link"> Create Post</Link>
        </li>
        <li className="nav_li">
          <Link to="/signup" className="nav_link">
            Sign Up
          </Link>
        </li>
        <li className="nav_li">
          <Link to="/login" className="nav_link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
