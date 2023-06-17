import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface Props {
    name: string,
    description: string,
    image: string | StaticImageData,
    githubLink?: string
}

export default function Project(props: Props) {
    require("../styles/project-entry.css")

    return (
        <div className="project-entry">
            <Image src={props.image} alt={props.name} className="project-image"/>

            <div className="project-text-area">
                <h3 className="project-name">{props.name}</h3>
                <p className="project-description">{props.description}</p>

                <div className="project-links">
                    <Link href={props.githubLink ?? ""} target="_blank" rel="noopener noreferrer"
                          className="project-link"
                          style={{display: props.githubLink == null ? "none" : "block"}}>
                        GitHub
                    </Link>
                </div>
            </div>
        </div>
    )
}
