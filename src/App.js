import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import PageNotFound from "./pages/pageNotFound";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Switch>
          <Route path="/" exact>
          <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome></Welcome>
          </Route>
          <Route path="/products" exact>
            <Products></Products>
          </Route>
          <Route path="/products/:productId">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// localhost:3000/product-detail/<any-thing>
