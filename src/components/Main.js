import React from 'react';
import { lazy, Suspense } from 'react';
// import { Suspense } from 'react';
const EducationExperience = lazy(() => import('./main/EducationExperience/EducationExperience'));
const WorkExperience = lazy(() => import('./main/WorkExperience/WorkExperience'));
const TechSkills = lazy(() => import('./main/WorkExperience/TechSkills'));
const Projects = lazy(() => import('./main/Projects'));
const AboutMe = lazy(() => import('./main/AboutMe'));
const ContactForm = lazy(() => import('./main/ContactForm'));


function Main() {
    return (
        <main className="container-fluid">
            <Suspense fallback={<div>Loading...</div>}>
                <AboutMe />
                <WorkExperience />
                <TechSkills />
                <Projects />
                <EducationExperience />
                <ContactForm />
            </Suspense>
        </main>
    );
}

export default Main;