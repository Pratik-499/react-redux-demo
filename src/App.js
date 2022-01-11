import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <ProductListing />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
          <Route>404 Not Found</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;