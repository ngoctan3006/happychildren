import React from 'react'
import Tags from './Tags/Tags'
import Spots_on from './Spots_on/Spots_on'
import Daily from './Daily/Daily'

export default function News_body() {
    return (
        <div>
            <Tags/>
            <Spots_on/>
            <Daily/>
        </div>
    )
}
