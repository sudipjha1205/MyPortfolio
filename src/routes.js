import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import { AuthProvider } from "./Components/Authorization/AuthContext";
import { useAuth } from "./Components/Authorization/AuthContext";

import PersonalInfoForm from "./Components/Forms/PersonalInfoForm";
import DescriptionForm from "./Components/Forms/DescriptionForm";
import AcademicForm from "./Components/Forms/AcademicForm";
import WorkExperienceForm from "./Components/Forms/WorkExperienceForm";
import SkillsForm from "./Components/Forms/SkillsForm";
import ProjectForm from "./Components/Forms/ProjectForm";
import LinksForm from "./Components/Forms/LinksForm";
import NotAuthorized from "./Components/NotAuthorized/NotAuthorized";
import Test from "./Components/Debugging/test";

const AppRoutes = () => {
    const isAuthenticated = useAuth()

    return(
        <Routes>
            <Route path='/' element={isAuthenticated? <PersonalInfoForm /> : <NotAuthorized />} />
            <Route path='/DescriptionInfo' element={isAuthenticated? <DescriptionForm /> : <NotAuthorized />} />
            <Route path='/AcademicForm' element={isAuthenticated? <AcademicForm /> : <NotAuthorized />} /> 
            <Route path='/WorkExperienceForm' element={isAuthenticated? <WorkExperienceForm /> : <NotAuthorized />} /> 
            <Route path='/SkillsForm' element={isAuthenticated? <SkillsForm /> : <NotAuthorized />} />
            <Route path='/ProjectsForm' element={isAuthenticated? <ProjectForm /> : <NotAuthorized />} />
            <Route path='/LinksForm' element={isAuthenticated? <LinksForm /> : <NotAuthorized />} />
            <Route path='/test' element={isAuthenticated? <Test /> : <NotAuthorized />} />
        </Routes>
    )
}

const RoutesFunc = () => {
    return(
        <Router>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </Router>
    )
}

export default RoutesFunc;