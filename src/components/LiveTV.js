import React, { PureComponent } from 'react'
import './LiveTV.css'

export default function LiveTV() {
    return (
        <div className='container livetv justify-content'>
            <iframe className='videodiv' width="751" height="480" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}


