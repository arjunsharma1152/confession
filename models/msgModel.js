const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({
message: {
    type: String,
    trim: true,
    required: [true, 'Message  is required']
}
})

const Msg = mongoose.model('Msg', msgSchema);

module.exports = Msg;