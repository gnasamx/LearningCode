const Event = require('../../models/event')
const Booking = require('../../models/booking')
const { transformBooking, transformEvent } = require('./merge')

// const userId = '5c525e37458b2f2d2bf948bb'

module.exports = {
  bookings: async req => {
    if (!req.isAuth) {
      throw new Error('Un-authenticated!!!')
    }

    try {
      const bookings = await Booking.find()
      return bookings.map(booking => {
        return transformBooking(booking)
      })
    } catch (err) {
      console.log('Booking Schema Error: ', err)
      throw err
    }
  },
  bookEvent: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Un-authenticated!!!')
    }
    const fetchedEvent = await Event.findOne({ _id: args.eventId })
    const booking = new Booking({
      user: req.userId,
      event: fetchedEvent,
    })
    const result = await booking.save()
    return transformBooking(result)
  },
  cancelBooking: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Un-authenticated!!!')
    }
    try {
      const booking = await Booking.findById(args.bookingId).populate('event')
      const event = transformEvent(booking.event)
      await Booking.deleteOne({ _id: args.bookingId })
      return event
    } catch (err) {
      throw err
    }
  },
}
