import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/common/ErrorBoundary';
import PrivateRoute from './components/common/PrivateRoute';
import Toast from './components/common/Toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Chalets from './components/pages/Chalets';
import Hotels from './components/pages/Hotels';
import PropertyDetails from './components/pages/PropertyDetails';
import Booking from './components/pages/Booking';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminProperties from './components/admin/AdminProperties';
import AdminBookings from './components/admin/AdminBookings';
import AdminPayments from './components/admin/AdminPayments';
import AdminUsers from './components/admin/AdminUsers';
import AdminSettings from './components/admin/AdminSettings';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Toast />
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chalets" element={<Chalets />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/booking/:id" element={<Booking />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* المسارات المحمية للإدارة */}
              <Route path="/admin" element={
                <PrivateRoute requiredRole="admin">
                  <AdminDashboard />
                </PrivateRoute>
              } />
              <Route path="/admin/properties" element={
                <PrivateRoute requiredRole="admin">
                  <AdminProperties />
                </PrivateRoute>
              } />
              <Route path="/admin/bookings" element={
                <PrivateRoute requiredRole="admin">
                  <AdminBookings />
                </PrivateRoute>
              } />
              <Route path="/admin/payments" element={
                <PrivateRoute requiredRole="admin">
                  <AdminPayments />
                </PrivateRoute>
              } />
              <Route path="/admin/users" element={
                <PrivateRoute requiredRole="admin">
                  <AdminUsers />
                </PrivateRoute>
              } />
              <Route path="/admin/settings" element={
                <PrivateRoute requiredRole="admin">
                  <AdminSettings />
                </PrivateRoute>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;