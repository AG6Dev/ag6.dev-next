import Image from "next/image";
import Link from "next/link";

import icon from '../assets/icon.png'

export default function Navbar() {
    require('../styles/navbar.css')

    return (
        <nav className="navbar">
            <div className="navbar-left-links">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </div>

            <div className="navbar-middle">
                <div className="navbar-brand">
                    <Image src={icon} alt="Icon" className="navbar-icon"/>
                    <h1>AG6Dev</h1>
                </div>
                <span className="navbar-middle-bar"></span>
            </div>

            <div className="navbar-right-links">
                <ul>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
)
}