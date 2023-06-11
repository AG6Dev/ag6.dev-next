import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface Props {
    name: string,
    description: string,
    image: string | StaticImageData,
    githubLink?: string
}

export default function Project(props: Props) {
    require("../styles/components/Project.css")

    return (
        <div className="project-entry">
            <Image src={props.image} alt={props.name} id="project-image"/>
            <h3 id="project-name">{props.name}</h3>
            <p id="project-description">{props.description}</p>

            <div id="project-links">
                <Link href={props.githubLink ?? ""} target="_blank" rel="noopener noreferrer" id="project-link"
                      style={{display: props.githubLink == null ? "none" : "block"}}>GitHub</Link>
            </div>
        </div>
    )
}
