import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppraisePage from "./pages/AppraisePage";
import FaSDwYOLOPage from "./pages/FaSDwYOLOPage";
import ONEProjectPage from "./pages/ONEProjectPage";
import PortfolioWebsitePage from "./pages/PortfolioWebsitePage";
import RexRunPage from "./pages/RexRunPage";
import SlimePage from "./pages/SlimePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PortfolioWebsite" element={<PortfolioWebsitePage />} />
        <Route path="/FireandSmokeDetection" element={<FaSDwYOLOPage />} />
        <Route path="/Slime" element={<SlimePage />} />
        <Route path="/ApprAIse" element={<AppraisePage />} />
        <Route path="/RexRun" element={<RexRunPage />} />
        <Route path="/ONEProject" element={<ONEProjectPage />} />
      </Routes>
    </Router>
  );
};

export default App;
