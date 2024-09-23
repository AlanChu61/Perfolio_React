import { lazy, Suspense } from 'react';

const Education = lazy(() => import('./main/Education'));
const Projects = lazy(() => import('./main/Projects'));
const SelfIntro = lazy(() => import('./main/Selfintro'));
const ContactForm = lazy(() => import('./main/ContactForm'));

function Main() {
    return (
        <main className="container-fluid">
            <Suspense fallback={<div>Loading...</div>}>
                <SelfIntro />
                <Projects />
                <Education />
                <ContactForm />
            </Suspense>
        </main>
    );
}

export default Main;