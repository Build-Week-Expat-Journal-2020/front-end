import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './components/Register'
import HomeFeed from './components/HomeFeed'
import Header from './components/Header'
import Login from './components/Login'
import PrivateRoute from './utils/PrivateRoute';

import { Link } from 'react-router-dom'


import './App.css';

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
