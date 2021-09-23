import './App.scss';
import { Home, ProductList, SingleProduct, Register, Login, Cart } from './pages';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/productlist">
            <ProductList />
          </Route>
          <Route path="/product">
            <SingleProduct />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
