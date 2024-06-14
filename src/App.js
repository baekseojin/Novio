import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as P from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<P.Main />} />
        <Route path="/record" element={<P.Record />} />
        <Route path="/record/observation" element={<P.Observation />} />
        <Route path="/record/feeling" element={<P.Feeling />} />
        <Route path="/record/need" element={<P.Need />} />
        <Route path="/record/request" element={<P.Request />} />
      </Routes>
    </Router>
  );
}

export default App;
