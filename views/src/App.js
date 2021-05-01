import './App.css';

import Signup from './components/Signup/Signup.js'
import Header from './components/Header/Header.js'
import Login from './components/Login/Login.js'
import Home from './components/Home/Home.js'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
function App() {
  return (
    
    <Router>
      <div className = "App">
        <Header />
        <Switch>
        <Route path = "/" exact component = {Home} />
          <Route path = "/login" component = {Login} />
          <Route path = "/signup" component = {Signup}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
