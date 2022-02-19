import EventModel from "../Models/EventModel.js";

class EventService {
  async create(event) {
    //data logic
    const newEvent = await EventModel.create(event);
    return newEvent;
  }

  async getAll() {
    const events = await EventModel.find();
    return events;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Enter event id");
    }
    const event = await EventModel.findById(id);
    return event;
  }

  async update(event) {
    if (!event._id) {
      throw new Error("Enter event id");
    }
    const updatedEvent = await EventModel.findByIdAndUpdate(event._id, event, {
      new: true,
    });
    return updatedEvent;
  }

  async delete(id) {
    if (!id) {
      throw new Error("Enter post id");
    }
    const event = await EventModel.findByIdAndDelete(id);
    return event;
  }
}

export default new EventService();
