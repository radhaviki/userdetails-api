import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let userSchema = new Schema({
  urid: {
    type: String
  },
  username: {
    type: String
  },
});

export default mongoose.model('userdetails', userSchema);
