import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.components";
import PostAuthenticate from "./PostAuthenticate.components";
import Home from "./pages/Home.components";
import Navbar from "./components/Navbar.components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authorize" element={<PostAuthenticate />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
