import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import NoRoute from "./pages/NoRoute";

function App() {
  return (
    <>
      <BrowserRouter basename="/app" future={{ v7_startTransition: true }}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"pricing"} element={<Pricing />} />
          <Route path={"product"} element={<Product />} />
          <Route path={"*"} element={<NoRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
