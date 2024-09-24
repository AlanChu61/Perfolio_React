import React from 'react';
// import { lazy, Suspense } from 'react';
import { Suspense } from 'react';
// const EducationExperience = lazy(() => import('./Main/EducationExperience/EducationExperience'));
// const WorkExperience = lazy(() => import('./Main/WorkExperience/WorkExperience'));
// const TechSkills = lazy(() => import('./Main/WorkExperience/TechSkills'));
// const Projects = lazy(() => import('./Main/Projects'));
// const SelfIntro = lazy(() => import('./Main/Selfintro'));
// const ContactForm = lazy(() => import('./ContactForm'));

import EducationExperience from './Main/EducationExperience/EducationExperience';
import WorkExperience from './Main/WorkExperience/WorkExperience';
import TechSkills from './Main/WorkExperience/TechSkills';
import Projects from './Main/Projects';
import SelfIntro from './Main/Selfintro';
import ContactForm from './ContactForm';

function Main() {
    return (
        <main className="container-fluid">
            <Suspense fallback={<div>Loading...</div>}>
                <SelfIntro />
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