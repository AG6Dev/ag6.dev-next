import Image, {StaticImageData} from "next/image";

interface Props {
    name: string,
    link: string,
    image: string | StaticImageData,
    color: string
}

export default function SocialButton(props: Props) {
    require("../styles/social-button.css")

    return (
        <a href={props.link} className="social-link-wrapper" style={{backgroundColor: props.color}}>
            <Image src={props.image} alt={props.name} className="social-link-img"/>
            {props.name}
        </a>
    )
}