const Event = require('../../models/event')
const { transformEvent } = require('./merge')
const User = require('../../models/user')

// const userId = '5c525e37458b2f2d2bf948bb'

module.exports = {
  events: async () => {
    try {
      const events = await Event.find()
      return events.map(event => {
        return transformEvent(event)
      })
    } catch (err) {
      throw err
    }
  },
  createEvent: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Un-authenticated!!!')
    }
    const event = new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: +args.eventInput.price,
      date: new Date(args.eventInput.date),
      creator: req.userId,
    })
    let createdEvent
    try {
      const result = await event.save()
      return transformEvent(result)
      const creator = await User.findById(req.userId)

      if (!creator) {
        throw new Error('User not found.')
      }
      creator.createdEvents.push(event)
      await creator.save()
      return createdEvent
    } catch (err) {
      console.log(err)
      throw err
    }
  },
}
