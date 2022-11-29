import { Route, Routes } from "react-router-dom";
import Customers from "./pages/customers";
import Login from "./pages/login";
import Offers from "./pages/offer";
import Orders from "./pages/orders";
import Products from "./pages/products";
import Ragistation from "./pages/ragistation";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />}> */}
        <Route index element={<Login />} />
        <Route path="customers" element={<Customers />} />
        <Route path="products" element={<Products />} />
        <Route path="offers" element={<Offers />} />
        <Route path="orders" element={<Orders />} />
        <Route path="ragistation" element={<Ragistation />} />
        {/* <Route path="*" element={<NoPage />} /> */}
       {/* </Route> */}
    </Routes>
  );
}

export default App;
