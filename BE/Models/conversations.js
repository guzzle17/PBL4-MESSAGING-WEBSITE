const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    groupName: { type: String },
    isGroupChat: { type: Boolean, default: false },
    last_message: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Conversation', ConversationSchema);