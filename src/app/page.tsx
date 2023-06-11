import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
    return (
        <div className="wrapper">
            <h1>Welcome to my site.</h1> {/*make sure to remove this line*/}
            <AboutSection />
            <ProjectSection />
        </div>
    )
}
