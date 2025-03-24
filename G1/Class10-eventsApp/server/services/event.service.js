import Event from "../models/event.schema.js";

export default class EventService {
  async getAll(filter = {}) {
    const events = await Event.find(filter).collation({
      locale: "en",
      strength: 2,
    });
    return events;
  }

  async create(body) {
    const event = await Event.create(body);
    return event;
  }

  async delete(id) {
    return Event.findByIdAndDelete(id);
  }
}
