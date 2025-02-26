import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import GradeEntry from './pages/GradeEntry';
import Visualizations from './pages/Visualizations';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/grade-entry" element={<GradeEntry />} />
            <Route path="/visualizations" element={<Visualizations />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;