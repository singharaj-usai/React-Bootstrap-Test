import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout';
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
