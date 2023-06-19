import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
    return (
        <div className="wrapper">
            <h1>Welcome to my site.</h1> {/*make sure to remove this line*/}
            <AboutSection/>
            <ProjectSection/>
            <ContactSection/>
        </div>
    )
}
