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
        <a href={props.link} className="social-link-a">
            <div className="social-link-div"  style={{backgroundColor: props.color}}>
                <Image src={props.image} alt={props.name} className="social-link-img"/>
                <h3 className="social-link-name">{props.name}</h3>
            </div>
        </a>
    )
}