import { Schema } from 'dynamoose';

export const UserSchema = new Schema({
  PK: {
    type: String,
    hashKey: true,
    index: {
      name: 'numCard-index',
      global: true,
      rangeKey: 'SK',
      throughput: { read: 2, write: 2 },
      project: true,
    },
  },
  SK: {
    type: String,
    rangeKey: true,
  },
  userId: {
    type: String,
    required: true,
    index: {
      name: 'userId-index',
      global: true,
      rangeKey: 'SK',
      project: true,
      throughput: { read: 2, write: 2 },
    },
  },
});
