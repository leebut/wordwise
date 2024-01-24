import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import NoRoute from "./pages/NoRoute";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter basename="/app" future={{ v7_startTransition: true }}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"pricing"} element={<Pricing />} />
          <Route path={"product"} element={<Product />} />
          <Route path={"app"} element={<AppLayout />} />

          <Route path={"*"} element={<NoRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
