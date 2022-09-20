import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const mappedData = data.map((element, index) => {
        return (
            <Card 
                key={index}
                {...element}
            />
        )
    })
    return (
        <div>
            <Header />
            {mappedData}
        </div>
    )
}