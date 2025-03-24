import EventService from "../services/event.service.js";

export default class EventController {
  constructor() {
    this.eventService = new EventService();
  }

  async getAll(req, res) {
    try {
      const filter = {};
      if (req.query.artist) {
        filter.artist = req.query.artist;
      }
      if (req.query.location) {
        filter.location = req.query.location;
      }
      const events = await this.eventService.getAll(filter);
      res.send(events);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async create(req, res) {
    try {
      const eventBody = req.body;
      const event = await this.eventService.create(eventBody);
      res.status(201).send(event);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const eventId = req.params.id;
      await this.eventService.delete(eventId);
      res.status(200).send({ message: "Event deleted successfully" });
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  }
}
