import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";

import BookQueue from "./pages/BookQueue";
import QueueStatus from "./pages/QueueStatus";
import MyTokens from "./pages/MyTokens";

import Dashboard from "./pages/Dashboard";
import DisplayBoard from "./pages/DisplayBoard";

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminLogin />} />

        <Route path="/book" element={
          <ProtectedRoute role="user">
            <BookQueue />
          </ProtectedRoute>
        } />

        <Route path="/status" element={
          <ProtectedRoute role="user">
            <QueueStatus />
          </ProtectedRoute>
        } />

        <Route path="/history" element={
          <ProtectedRoute role="user">
            <MyTokens />
          </ProtectedRoute>
        } />

        <Route path="/dashboard" element={
          <ProtectedRoute role="admin">
            <Dashboard />
          </ProtectedRoute>
        } />

        <Route path="/board" element={
          <ProtectedRoute role="admin">
            <DisplayBoard />
          </ProtectedRoute>
        } />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;