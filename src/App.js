import logo from "./logo.svg";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Menu from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import Movies from "./components/Movies";
import AddRental from "./components/AddRental";
import Rentals from "./components/Rentals";
import AddPayment from "./components/AddPayment";
import GetPayments from "./components/GetPayments";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AddMovie" element={<AddMovie />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/AddRental" element={<AddRental />} />
          <Route path="/Rentals" element={<Rentals />} />
          <Route path="/GetPayments" element={<GetPayments />} />
          <Route path="/AddPayment" element={<AddPayment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
