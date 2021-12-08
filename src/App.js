import './App.scss';
import { Home, ProductList, SingleProduct, Register, Login, Cart } from './pages';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/productlist/:category">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <SingleProduct />
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/register">
          {user ? <Redirect to="/"/> : <Register />}
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/"/> : <Login />}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
