import { JSX } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import AppRoutes from "./routes/Routes";
import "./App.css"

const App = (): JSX.Element => (
  <Router>
    <Navbar />
    <main className="main-page">
      <AppRoutes />
    </main>
  </Router>
);

export default App;
