import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import NoRoute from "./pages/NoRoute";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter basename="/app" future={{ v7_startTransition: true }}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"pricing"} element={<Pricing />} />
          <Route path={"product"} element={<Product />} />
          <Route path={"login"} element={<Login />} />
          <Route path={"app"} element={<AppLayout />} />
          <Route path={"*"} element={<NoRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
