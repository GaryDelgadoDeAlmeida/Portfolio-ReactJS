import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Anonymous
import HomeScreen from "./screens/User/HomeScreen";
import PortfolioScreen from "./screens/User/PortfolioScreen";
import SinglePortfolioScreen from './screens/User/SinglePortfolioScreen';

// Admin
import AdminHomeScreen from "./screens/Admin/HomeScreen";
import AdminProfileScreen from "./screens/Admin/ProfileScreen";
import AdminSkillsScreen from "./screens/Admin/SkillsScreen";
import AdminPortfolioScreen from "./screens/Admin/PortfolioScreen";
import AdminPortfolioAddScreen from './screens/Admin/PortfolioAddScreen';
import AdminPortfolioSingleScreen from "./screens/Admin/PortfolioSingleScreen";
import AdminPortfolioSingleEditScreen from "./screens/Admin/PortfolioSingleEditScreen";
import AdminExperienceScreen from './screens/Admin/ExperienceScreen';
import AdminEmailScreen from './screens/Admin/EmailScreen';
import AdminEmailSingleScreen from './screens/Admin/EmailSingleScreen';
import AdminExperienceAddScreen from './screens/Admin/ExperienceAddScreen';
import AdminWitnessesScreen from './screens/Admin/WitnessesScreen';
import AdminWitnessesAddScreen from './screens/Admin/WitnessesAddScreen';
import AdminPriceScreen from "./screens/Admin/PriceScreen";

// Common
import LoginScreen from "./screens/LoginScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

export default function RoutesConfig() {

    return (
        <Routes>
            {/* Admin */}
            <Route path="/admin" element={<AdminHomeScreen />} />
            <Route path="/admin/about" element={<AdminProfileScreen />} />
            <Route path="/admin/skills" element={<AdminSkillsScreen />} />
            <Route path="/admin/portfolio" element={<AdminPortfolioScreen />} />
            <Route path="/admin/portfolio/add" element={<AdminPortfolioAddScreen />} />
            <Route path="/admin/portfolio/:portfolioID" element={<AdminPortfolioSingleScreen />} />
            <Route path="/admin/portfolio/:portfolioID/edit" element={<AdminPortfolioSingleEditScreen />} />
            <Route path="/admin/experiences" element={<AdminExperienceScreen />} />
            <Route path="/admin/experiences/add" element={<AdminExperienceAddScreen />} />
            <Route path="/admin/experiences/:experienceID" element={<AdminExperienceScreen />} />
            <Route path="/admin/experiences/:experienceID/edit" element={<AdminExperienceScreen />} />
            <Route path="/admin/prices" element={<AdminPriceScreen />} />
            <Route path="/admin/prices/add" element={"Hi"} />
            <Route path="/admin/prices/:price" element={"Hi"} />
            <Route path="/admin/prices/:price/edit" element={"Hi"} />
            <Route path="/admin/email" element={<AdminEmailScreen />} />
            <Route path="/admin/email/:emailID" element={<AdminEmailSingleScreen />} />
            <Route path="/admin/witnesses" element={<AdminWitnessesScreen />} />
            <Route path="/admin/witnesses/add" element={<AdminWitnessesAddScreen />} />
            
            {/* Anonymous */}
            <Route path="/portfolio" element={<PortfolioScreen />} />
            <Route path="/portfolio/:portfolioID" element={<SinglePortfolioScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
        </Routes>
    )
}