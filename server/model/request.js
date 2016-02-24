import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  title: { type: String},
  description: { type: String },
  client: { type: String },
  priority: { type: Number },
  date: { type: Date, default: Date.now },
  url: { type: String },
});

export default RequestSchema;
