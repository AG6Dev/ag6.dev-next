import Image from "next/image";
import cat2 from "../assets/cat2.png";

export default function AboutSection() {
    require("../styles/about-section.css")

    return (
        <div id="about-wrapper">
            <Image src={cat2} alt="cat" id="about-image"/>
            <div id="about-info">
                <h2>About Me</h2>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>Hello 👋, I'm AG6, a 17 year old from the UK 🇬🇧. <br></br>
                    I mainly use Java 🍵 and would like to branch out to other languages 🤓</p>
            </div>
        </div>
    )
}