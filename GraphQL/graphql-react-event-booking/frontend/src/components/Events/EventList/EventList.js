import React from 'react'
import './EventList.css'
import EventItem from './EventItem/EventItem'

const eventList = ({ events, authUserId, onViewDetail }) => {
  const allEvents = events.map(event => {
    return (
      <EventItem
        key={event._id}
        eventId={event._id}
        title={event.title}
        date={event.date}
        price={event.price}
        userId={authUserId}
        creatorId={event.creator._id}
        onDetail={onViewDetail}
      />
    )
  })

  return <ul className="event__list">{allEvents}</ul>
}

export default eventList
