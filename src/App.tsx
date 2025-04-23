import { JSX } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import AppRoutes from "./routes/Routes";

const App = (): JSX.Element => (
  <Router>
    <Navbar />
    <main>
      <AppRoutes />
    </main>
  </Router>
);

export default App;
