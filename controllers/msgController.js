const Msg = require('../models/msgModel');

exports.getAllMsg = async (req, res) => {
    try {
        const msg = await Msg.find();

        res.status(200).json({
            status: 'success',
            results: msg.length,
            data: { msg }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};

exports.addMsg = async (req, res) => {
    try {

        const newMsg = await Msg.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                msg: newMsg
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "Invalid data sent"
        })
    }
};