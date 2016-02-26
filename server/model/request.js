import mongoose from 'mongoose';
import dateformat from 'dateformat';

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  title: { type: String},
  description: { type: String },
  client: { type: String },
  priority: { type: Number },
  date: { type: Date, default: Date.now },
  url: { type: String },
  area: { type: String },
  resolved: { type: Boolean, default: false }
});

RequestSchema.methods.readable = function () {
  return {
    id: this._id,
    title: this.title,
    description: this.description,
    client: this.client,
    priority: this.priority,
    resolved: this.resolved,
    date: dateformat(this.date, "dddd, mmmm dS, yyyy"),
    url: this.url
  }
}

export default RequestSchema;
