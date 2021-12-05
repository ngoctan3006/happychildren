import React from 'react'
import BigTag from './BigTag'
import SmallTag from './SmallTag'

export default function Tags() {
    const small_tags = ["Human", "Resources", "Activities"]
    return (
        <div className="Tags">
            <BigTag name="Spots on"/>

            {small_tags.map(tag => (
                <SmallTag name={tag}/>
            ))}
        </div>
    )
}
