import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import PrivateRoute from './utils/PrivateRoute';

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
