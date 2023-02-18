import "./App.css";
import { Routes, Route } from "react-router-dom";

// components
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import UserProfilePage from "./pages/DashboardPages/UserProfilePage";
import UserOrderListPage from "./pages/DashboardPages/UserOrderListPage";

import FoodFunToast from "./components/shared/FoodFunToast";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="menu" element={<MenuPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="order" element={<OrderPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="dashboard" element={<DashboardPage />}>
                    <Route path="profile" element={<UserProfilePage />} />
                    <Route path="orderList" element={<UserOrderListPage />} />
                </Route>
            </Routes>
            <Footer />
            <FoodFunToast />
        </>
    );
}

export default App;
