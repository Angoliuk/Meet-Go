import { validationResult } from "express-validator";
import EventService from "../Services/EventService.js";

class EventController {
  async create(req, res) {
    try {
      // const errors = validationResult();
      // if (!errors.isEmpty()) {
      //   console.log(errors);
      //   return res.status(400).json({ message: "Error", errors });
      // }
      const event = await EventService.create(req.body);
      return res.json(event);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const events = await EventService.getAll();
      return res.json(events);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const event = await EventService.getOne(req.params.id);
      return res.json(event);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedEvent = await EventService.update(req.body);
      return res.json(updatedEvent);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const event = await EventService.delete(req.params.id);
      return res.json(event);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new EventController();
