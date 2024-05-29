import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Layout/dashboard/dashboard.component";
import Flight from "./pages/flight/flight.component";
import FlightDetails from "./pages/flight-details/flight-details.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Flight />} />
          <Route path="/flights/:id" element={<FlightDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
