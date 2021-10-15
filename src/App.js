import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Rooms from './Pages/Rooms/Rooms/Rooms';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Club from './Pages/Club/Club';
import Event from './Pages/Event/Event';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <PrivateRoute exact path="/club">
              <Club />
            </PrivateRoute>
            <PrivateRoute exact path="/event">
              <Event />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/rooms/:bookingId">
              <Rooms />
            </PrivateRoute>

            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
