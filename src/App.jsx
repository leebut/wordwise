import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import NoRoute from "./pages/NoRoute";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import City from "./components/City";
import CountryList from "./components/CountryList";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";

function App() {
  const [cities, setCities] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <>
      <BrowserRouter basename="/app" future={{ v7_startTransition: true }}>
        <Routes>
          {/* <Route path={"/"} element={<Home />} /> */}
          <Route index element={<Home />} />
          <Route path={"pricing"} element={<Pricing />} />
          <Route path={"product"} element={<Product />} />
          <Route path={"login"} element={<Login />} />
          <Route path={"app"} element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path="cities:/id" element={<City />} />
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path={"*"} element={<NoRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
