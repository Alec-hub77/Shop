import './App.scss';
import { Home, ProductList, SingleProduct, Register, Login, Cart, Success } from './pages';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import  ScrollToTop  from './helpers/scrollToTop'
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => state.user.currentUser);
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop>
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
          <Route path="/success">
            <Success/>
          </Route>
        </Switch>
        </ScrollToTop>
      </div>
    </BrowserRouter>
  );
}

export default App;
