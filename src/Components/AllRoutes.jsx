import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/LandingPage/Pages/HomePage";
import Help from "../Components/LandingPage/Pages/Help";
import SubmitARequest from "../Components/LandingPage/Pages/SubmitARequest";
import Cart from "../Pages/Cart/Cart";
import { Plans } from "../Pages/Plans/plans";
import DateSelector from "../Pages/DateSelector/DateSelector";
import { MenuPlans } from "../Pages/MenuPlans/MenuPlans";
import { Login } from "../Pages/Authentication/Login";
import { SignUp } from "../Pages/Authentication/SignUp";
import { Checkout } from "./Checkout/Checkout";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/help" element={<Help />} />
      <Route path="/submitARequest" element={<SubmitARequest />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/deliverydate" element={<DateSelector />} />
      <Route path="/plans" element={<Plans />} />

      <Route path="/plansandmenus" element={<MenuPlans />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default AllRoutes;