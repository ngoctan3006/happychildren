import React from 'react'

export default function Spots_element(props) {
    const new_on = props.data
    const date=new_on["data"]
    const fig_URL=new_on["fig_URL"]
    const content=new_on["content"]
    const category=new_on["category"]
    const header=new_on["header"]

    return (
        <div className="Spots_element">
            <div id="image">
                <img src={fig_URL} height={"3cm"}/>
            </div>
                <div>
                <div id = "date">
                    {date}
                </div>
                <div id = "category">
                    {category}
                </div>
                <div id="header">
                    {header}
                </div>
                <div id = "content">
                    {content}
                </div>
            </div>
        </div>
    )
}
