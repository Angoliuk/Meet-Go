import mongoose from "mongoose";

const EventModel = new mongoose.Schema({
  author: { type: String },
  authorId: { type: String },
  title: { type: String },
  content: { type: String },
  date: { type: Date },
  participants: { type: Array },
});

export default mongoose.model("EventModel", EventModel);
