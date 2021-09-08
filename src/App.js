import './App.css';
import Navbar from './components/Navbar';
import AuthContainer from './components/AuthContainer'
import HomeContainer from './components/HomeContainer'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={AuthContainer} />
        <Route path="/home-page" component={HomeContainer} />
      </Switch>
    </div>
  );
}

export default App;
