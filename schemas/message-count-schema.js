const mongoose = require('mongoose')

const messageCountSchema = mongoose.Schema({
//user id
_id:{
    type: String,
    required: true,
},
//HOw many messages
messageCount: {
    type: Number,
    required: true,
}
})
module.exports = mongoose.model('message-counts', messageCountSchema)