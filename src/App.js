import "./App.scss";
import { Topbar, Sidebar } from "./components/";
import { Home, UserList, User, NewUser, ProductList, Product, NewProduct } from "./pages/";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/users">
              <UserList/>
            </Route>
            <Route path="/user:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/products">
              <ProductList/>
            </Route>
            <Route path="/product:productId">
              <Product />
            </Route>
            <Route path="/newProduct">
              <NewProduct />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
