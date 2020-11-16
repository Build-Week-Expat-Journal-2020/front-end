import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './components/Register'
import './App.css';
import PrivateRoute from './utils/PrivateRoute';
import Login from './components/Login';
import HomeFeed from './components/HomeFeed';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <PrivateRoute path="/homefeed" component={HomeFeed}/>
        <Route path="/register" component={Register} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
