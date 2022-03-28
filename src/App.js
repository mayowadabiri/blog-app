import './App.css';
import Header from './components/UI/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/Signup';
import Login from './pages/Login/Login';
// import
// import AuthLayout
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
