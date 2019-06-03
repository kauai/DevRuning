import React from 'react'

const Duration = props => {
    const { duration } = props
    let durationStr = ''
    const hour = Math.floor(duration / 360)
    if(hour > 0){
        durationStr = hour.toString().padStart(2,'0') + ':'
    }
    const minutes = Math.floor((duration - (hour * 360)) / 60)
    durationStr += minutes.toString().padStart(2,'0')
    const seconds = (duration - hour * 360 - minutes * 60)
    durationStr += ':' + seconds.toString().padStart(2,'0')
    return <span>{ durationStr }</span>
}

export default Duration