import { Route, Routes, Navigate } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Navbar from './components/Navbar';
import CategoriesScreen from './screens/CategoriesScreen';
import { ProductScreen } from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import ProductList from './screens/ProductList';
import { useSelector } from 'react-redux';
import Success from './screens/Success';
import Transfer from './screens/Transfer';
import Taste from './screens/Taste';

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homescreen />}></Route>
        <Route exact path="/CategoriesScreen" element={<CategoriesScreen />} />

        <Route exact path="/Cart" element={<CartScreen />} />
        <Route exact path="/Success" element={<Success />} />
        <Route exact path="/Cart/Checkout" element={<CheckoutScreen />} />
        <Route exact path="/Cart/Checkout/Transfer" element={<Transfer />} />
        <Route exact path="/taste-the-world/:id" element={<Taste />} />
        <Route exact path="/Products/:category" element={<ProductList />} />

        <Route exact path="/Product/:id" element={<ProductScreen />} />
        <Route
          exact
          path="/Login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          exact
          path="/Register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </>
  );
}

export default App;
