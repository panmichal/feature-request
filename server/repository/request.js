import mongoose from 'mongoose';
import RequestSchema from './../model/request';

const Request = mongoose.model("Request", RequestSchema);


export default {
  findAllByClient(client) {
    return Request.find({ client })
    .then(requests => {
      return requests.map(request => {
        return request.readable();
      })
    })
  },
  findAll() {
    return Request.find()
    .then(requests => {
      return requests.map(request => {
        return request.readable();
      })
    })
  },
  add(data) {
    const newRequest = new Request(data);

    return newRequest.save()
    .then(() => newRequest.readable());
  }
}
