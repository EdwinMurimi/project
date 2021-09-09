import './App.scss';
import Navbar from './components/Navbar';
import AuthContainer from './components/AuthContainer'
import HomeContainer from './components/HomeContainer'
import { Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={AuthContainer} />
          <PrivateRoute path="/home-page" component={HomeContainer} />
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
