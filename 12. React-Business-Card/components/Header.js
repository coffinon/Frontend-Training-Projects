import React from "react"

export default function Header() {
    return (
        <header>
            <img className="header--img" src="./images/photo.png"/>
            <h1 className="header--name">Laura Smith</h1>
            <h2 className="header--title">Frontend Developer</h2>
            <p className="header--website">laurasmith.website</p>
            <button className="header--button"><img src="./images/icon-email.png"/>Email</button>
        </header>
    )
}