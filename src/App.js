import './App.css';
import Header from './components/UI/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';

import { createContext, useState } from 'react';

export const UserContext = createContext(null);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={Login} />
            <Route path="/forgot-password" exact component={ForgotPassword} />
          </Switch>
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default App;
