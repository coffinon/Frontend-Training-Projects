import React from "react"

export default function Card(props) {
    return (
        <article className="card">
            <img className="card--image" src={props.imageUrl} />
            <div className="card--info">
                <div className="card--location-div">
                    <img src="../images/location-icon.png"/>
                    <span className="card--location">{props.location}</span>
                    <a className="card--location-link" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <h3 className="card--date">{props.startDate} - {props.endDate}</h3>
                <p className="card--overview">{props.description}</p>
            </div>
        </article>
    )
}