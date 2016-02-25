import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  title: { type: String},
  description: { type: String },
  client: { type: String },
  priority: { type: Number },
  date: { type: Date, default: Date.now },
  url: { type: String },
  area: { type: String },
});

RequestSchema.methods.readable = function () {
  return {
    id: this._id,
    title: this.title,
    description: this.description,
    client: this.client,
    priority: this.priority,
    date: this.date,
    url: this.url
  }
}

export default RequestSchema;
