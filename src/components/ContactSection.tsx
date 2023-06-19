import SocialButton from "@/components/SocialButton";

import githubIcon from "../assets/github-icon.svg"

export default function ContactSection() {
    require("../styles/contact-section.css")

    return (
        <div id="contact-wrapper">
            <h2>Contact</h2>
            <h3>You can contact me via my socials below.</h3>

            <ul id="contact-links">
                <li><SocialButton name="GitHub" link="https://github.com/AG6Dev" image={githubIcon} color="#fff" /></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}