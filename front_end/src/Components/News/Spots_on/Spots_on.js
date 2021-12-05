import React from 'react'
import Spots_element from './element/spots_element'

export default function Spots_on() {
    const news = [
        {
            "date": "20-11-2021",
            "fig_URL": "./fig.png",
            "content": "Users primarily interact with the Google Assistant through natural voice, though keyboard input is also supported. In the same nature and manner as Google Now, the Assistant is able to search the Internet, schedule events and alarms, adjust hardware settings on the user's device, and show information from the user's Google account. Google has also announced that the Assistant will be able to identify objects and gather visual information through the device's camera, and support purchasing products and sending money.",
            "category": "charity activity",
            "header": "300.000$ RAISED, WEBSITE GOT MARK 10 POINTS ON WEB PROGRAMMING"
        },
        {
            "date": "20-11-2021",
            "fig_URL": "./fig.png",
            "content": "Assistant initially debuted in May 2016 as part of Google's messaging app Allo, and its voice-activated speaker Google Home. After a period of exclusivity on the Pixel and Pixel XL smartphones, it began to be deployed on other Android devices in February 2017, including third-party smartphones and Android Wear (now Wear OS), and was released as a standalone app on the iOS operating system in 25th May 2017, ended. Alongside the announcement of a software development kit in April 2017, ......",
            "category": "charity activity",
            "header": "150.000$ DONATED, ABC ORPHANAGE VOTED UPGRADING FACILITIES FOR CHILDCARE"
        }]

    return (
        <div className="Spots_on">
            {news.map(new_on => (
                <Spots_element data={new_on}/>
            ))}
        </div>
    )
}
