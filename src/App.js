import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as C from "./components/index";
import * as P from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<P.Main />} />
      </Routes>
    </Router>
  );
}

export default App;
