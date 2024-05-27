import React, { Component } from "react";
import Home from "./pages/Home";
import Login from "./pages/Authentication/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Admin from "./pages/AdminDashboard/AdminDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/admin"
              element={<ProtectedRoute path="/admin" component={Admin} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
