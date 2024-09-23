import { lazy, Suspense } from 'react';

const EducationExperience = lazy(() => import('./Main/EducationExperience/EducationExperience'));
const WorkExperience = lazy(() => import('./Main/WorkExperience/WorkExperience'));
const TechSkills = lazy(() => import('./Main/WorkExperience/TechSkills'));

const Projects = lazy(() => import('./Main/Projects'));
const SelfIntro = lazy(() => import('./Main/Selfintro'));
const ContactForm = lazy(() => import('./Main/ContactForm'));

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