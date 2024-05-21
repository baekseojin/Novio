import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as C from "./components/index";
import * as P from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<P.Main />} />
        <Route path="/record" element={<P.Record />} />
        <Route path="/record/observation" element={<P.Observation />} />
      </Routes>
    </Router>
  );
}

export default App;
