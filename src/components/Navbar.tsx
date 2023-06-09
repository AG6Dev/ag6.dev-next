import Image from "next/image";
import Link from "next/link";

import icon from '../assets/icon.png'

export default function Navbar() {
    require("../styles/navbar.css")

    return (
        <nav id="navbar-wrapper">
            <div id="navbar-left-links">
                <Link href="/" className="navbar-link">Home</Link>
                <Link href="/about" className="navbar-link">About</Link>
            </div>

            <div id="navbar-middle">
                <div id="navbar-brand">
                    <Image src={icon} alt="AG6/AG6Dev" id="navbar-icon"/>
                </div>
            </div>

            <div id="navbar-right-links">
                <Link href="/projects" className="navbar-link">Projects</Link>
                <Link href="/contact" className="navbar-link">Contact</Link>
            </div>
        </nav>
    )
}