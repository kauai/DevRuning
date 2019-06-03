import React from 'react'
import moment from 'moment-timezone'

const DateStr = ({ date, timezone }) => {
    const data =  moment.tz(date,timezone)
    const data2 = data.clone().tz("GMT");
    return (
      <span>{ data2.format('DD/MM/YYYY - H:mm:ss') }</span>
    )
}

export default DateStr
