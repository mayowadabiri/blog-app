import './App.css';
import Header from './components/UI/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
// import
// import AuthLayout
import ForgotPassword from './pages/Auth/ForgotPassword';
function App() {
  return (
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
  );
}

export default App;
