import Skills from "./component/skills";
import Login from "./component/login";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/skills/:username" element={<Skills />} />
    </Routes>
  );
}

export default App;
