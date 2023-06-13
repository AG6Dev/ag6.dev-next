import Project from "@/components/Project";

import testImage from "../assets/icon.png";

export default function ProjectSection() {
    require("../styles/project-section.css")

    return (
        <div id="project-wrapper">
            <h2>Projects</h2>

            <div id="project-grid">
                <Project name="Test" description="This is a test description." githubLink="https://google.com" image={testImage} />
                <Project name="Test" description="This is a test description." githubLink="https://google.com" image={testImage} />
                <Project name="Test" description="This is a test description." githubLink="https://google.com" image={testImage} />
                <Project name="Test" description="This is a test description." githubLink="https://google.com" image={testImage} />
                <Project name="Test" description="This is a test description." githubLink="https://google.com" image={testImage} />
                <Project name="Test" description="This is a test description." githubLink="https://google.com" image={testImage} />
            </div>
        </div>
    )
}