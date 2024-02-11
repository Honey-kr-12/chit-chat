const Conversation = require("../models/conversation.model");
const Message = require("../models/message.model");

exports.sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId, receiverId, message
        });

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // await conversation.save();
        // await newMessage.save();

        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage)

    } catch (error) {
        console.log("error in send message controller", error.message);
        res.status(500).json({
            status:"fail",
            message:"internal server error"
        });
    }
}

exports.getMessage = async (req, res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId, userToChatId]},
        }).populate("messages")

        if (!conversation) return res.status(200).json([])

        const messages = conversation.messages

        res.status(200).json(messages)

    } catch (error) {
        console.log("error in get message controller", error.message);
        res.status(500).json({ error: "internal server error" })
    }
}