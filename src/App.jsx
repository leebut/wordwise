import "./App.css";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import NoRoute from "./pages/NoRoute";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import City from "./components/City";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter basename="/ww" future={{ v7_startTransition: true }}>
        <Routes>
          {/* <Route path={"/"} element={<Home />} /> */}
          <Route index element={<Home />} />
          <Route path={"pricing"} element={<Pricing />} />
          <Route path={"product"} element={<Product />} />
          <Route path={"login"} element={<Login />} />
          <Route path={"app"} element={<AppLayout />}>
            <Route
              index
              element={<Navigate replace to="cities" />}
              // element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path={"*"} element={<NoRoute />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
