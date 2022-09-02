import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Publications from './Publications/Publications';

function App() {
  return (    

    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/publications'>          
        <Publications />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/portfolio'>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
