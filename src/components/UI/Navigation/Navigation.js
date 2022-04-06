import { Link } from 'react-router-dom';
import './Navigation.css';
import { useHistory } from 'react-router-dom';
const Navigation = ({ isLoggedIn, setIsLoggedIn }) => {
  const history = useHistory();

  const handleLogout = () => {
    setIsLoggedIn(false);
    history.push('/login');
  };

  return (
    <nav className="nav">
      <ul className="nav_ul">
        <li className="nav_li">
          <Link to="/" className="nav_link">
            Home
          </Link>
        </li>
        <li className="nav_li">
          <Link to="/blog" className="nav_link">
            Posts
          </Link>
        </li>
        {isLoggedIn && (
          <>
            <li className="nav_li">
              <Link to="/new" className="nav_link">
                Create Post
              </Link>
            </li>
            <li className="nav_li">
              <button onClick={handleLogout} className="nav_link">
                Log out
              </button>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <>
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
          </>
        )}
      </ul>
    </nav>
  );
};
export default Navigation;
