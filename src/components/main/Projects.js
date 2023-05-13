import Project from "./Project";
import projectDetails from "./projectDetails.js";
function Projects() {
    return (
        <div className="projects row card" id="projects">
            <h2>Projects</h2>
            {projectDetails.map((project) => (
                <Project project={project} key={project.id} />
            ))}
        </div>
    )
}
export default Projects;