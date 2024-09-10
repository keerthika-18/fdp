import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Dashboard from "./scenes/Dashboard";
import HomePage from "./components/HomePage";
// import Faculty from "./scenes/Faculty";
import Event from "./scenes/Event";
import Upload from "./scenes/Upload";
import { DataProvider } from "./scenes/DataContext";
import Layout from "./scenes/global/Layout";
import EventForm from "./scenes/Faculty";

function App() {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<Layout />}>
            <Route path="/scenes/dashboard" element={<Dashboard />} />
            <Route path="/faculty" element={<EventForm />} />
            <Route path="/event" element={<Event />} />
            <Route path="/upload" element={<Upload />} />
          </Route>
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;

// export default App;
