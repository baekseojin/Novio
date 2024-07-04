import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as P from "./pages/index";
import { RecordProvider } from "./pages/record/recordContext";

function App() {
  return (
    <RecordProvider>
      <Router>
        <Routes>
          <Route path="/" element={<P.Main />} />
          <Route path="/record" element={<P.Record />} />
          <Route path="/record/observation" element={<P.Observation />} />
          <Route path="/record/feeling" element={<P.Feeling />} />
          <Route path="/record/need" element={<P.Need />} />
          <Route path="/record/request" element={<P.Request />} />
          <Route path="/record/confirm" element={<P.Confirm />} />
          <Route path="/record/completion" element={<P.Completion />} />
          <Route path="/record/calendar" element={<P.Calendar />} />
          <Route path="/record/calendar/update" element={<P.Update />} />
          <Route path="/training" element={<P.Training />} />
          <Route
            path="/training/scenario/start"
            element={<P.ScenarioStart />}
          />
          <Route
            path="/training/scenario/problem"
            element={<P.ScenarioProblem />}
          />
          <Route
            path="/training/scenario/solve"
            element={<P.ScenarioSolve />}
          />
          <Route
            path="/training/selfcheck/start"
            element={<P.SelfCheckStart />}
          />
          <Route
            path="/training/selfcheck/page"
            element={<P.SelfCheckPage />}
          />
          <Route path="/training/about" element={<P.About />} />
        </Routes>
      </Router>
    </RecordProvider>
  );
}

export default App;
