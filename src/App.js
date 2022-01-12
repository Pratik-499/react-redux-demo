import './App.css';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import Page404 from './containers/Page-404';
import Contact from './containers/Contact';
import Account from './containers/Account';
import ProtectedRoute from './components/ProtectedRoute';
import useAuth from './customHooks/useAuth';

function App() {

  const [isAuth, login, logout] = useAuth(false);

  const handleLogin = () => {
    login().then(() => {
      alert('you are logged in now');
    });
  }

  const handleLogout = () => {
    logout().then(() => {
      alert('you are logged out now');
    })
  }

  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <ProductListing isAuth={isAuth} login={handleLogin} />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
          <Route path="/pages/contact">
            <Contact />
          </Route>

          <ProtectedRoute path="/account" component={Account} auth={isAuth} data={{logout: handleLogout}} />

          <Route>
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;