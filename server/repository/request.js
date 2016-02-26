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
    .then(requests => {
      return [...requests].sort((a, b) => {
        return b.priority - a.priority;
      })
    })
  },
  reorderForClient(addedRequest) {
    return Request.find({ client: addedRequest.client, priority: { $lte: addedRequest.priority } })
    .then(requests => {
      let updates = [];
      requests.forEach(request => {
        if (request.priority > 0 && !request._id.equals(addedRequest.id)) {
          updates.push(Request.update({ _id: request._id}, { $set: { priority: request.priority - 1 }}))
        }
      })

      return Promise.all(updates);
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
  update(id, data) {
    return Request.findOneAndUpdate({ _id: id }, data, { new: true });
  },
  delete(id) {
    return Request.findOneAndRemove({ _id: id });
  },
  add(data) {
    const newRequest = new Request(data);

    return newRequest.save()
    .then(() => newRequest.readable());
  }
}
