import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PolicyPage from './pages/PolicyPage';
import FinancePage from './pages/FinancePage';
import StatementPage from './pages/StatementPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/policy">Policy</Link> | 
          <Link to="/finance">Finance</Link> | 
          <Link to="/statements">Statements</Link>
        </nav>
        <Routes>
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/statements" element={<StatementPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
