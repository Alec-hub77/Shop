import './App.scss';
import { Topbar, Sidebar } from './components/';
import {
  Home,
  UserList,
  User,
  NewUser,
  ProductList,
  Product,
  NewProduct,
} from './pages/';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {

  const admin = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.isAdmin;
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          { admin && (
            <>
              <Topbar />
              <div className="container">
                <Sidebar />
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/users">
                  <UserList />
                </Route>
                <Route path="/user:userId">
                  <User />
                </Route>
                <Route path="/newUser">
                  <NewUser />
                </Route>
                <Route path="/products">
                  <ProductList />
                </Route>
                <Route path="/product:productId">
                  <Product />
                </Route>
                <Route path="/newProduct">
                  <NewProduct />
                </Route>
              </div>
            </> )
          }
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
