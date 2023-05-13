import Education from "./main/Education";
import Projects from "./main/Projects";
import SelfIntro from "./main/Selfintro";
import ContactForm from "./main/ContactForm";

function Main() {
    return (
        <main className="container-fluid">
            <SelfIntro />
            <Projects />
            <Education />
            <ContactForm />
        </main>
    );
}

export default Main;
