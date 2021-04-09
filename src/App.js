import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import VenueList from './components/VenueList'
import Register from './components/Register'

function App() {
  return (
    <Router>
    <div className="App">
      <ul className="text-left">
        <li>
          <Link to='/Venues'>Venues</Link>
        </li>
        <li>
          <Link to='/Register'>Sign Up</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/Venues' component={VenueList}></Route>
        <Route exact path='/Register' component={Register}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
