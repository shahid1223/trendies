const express = require('express');
const router = express.Router();
require('dotenv').config();
const { body, validationResult } = require('express-validator');
const Message = require('./../models/MessageModel');

/*@route  api/create
  @desc   this end point used to create new message
  @access Public this api will accessable to anyone
*/
router.post('/create/message', [
    body('name', "Name is Required").not().isEmpty(),
    body('email', "email is Required").isEmail(),
    body('message', "message is Required").not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    // if error then this if statement will execute and return
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), code: 400 });
    };
    try {
        /* Destructuring values from body */
        const { name, email, message } = req.body;
        let messageObj = new Message({
            name: name,
            email: email,
            message: message
        });

        await messageObj.save();

        res.status(200).json({ message: "Message created successfully", code: 200 });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ err: "Internal server error", code: 500 });
    };
});

/*@route  api/allmessage
  @desc   this end point used to fetch all message
  @access Public this api will accessable to anyone
*/
router.get('/allmessage', async (req, res) => {
    try {
        const allMessage = await Message.find().sort();

        if (!allMessage) {
            return res.status(404).json({ error: "There is nothing to show", code: 404 });
        };

        res.status(200).json({ allMessage, code: 200 })

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ err: "Internal server error", code: 500 });
    };
});

/*@route  api/:id
  @desc   this end point used to fetch single by id message
  @access Public this api will accessable to anyone
*/
router.get('/:id', async (req, res) => {
    try {
        const allMessage = await Message.findById(req.params.id);

        if (!allMessage) {
            return res.status(404).json({ error: "Messagae not found", code: 404 });
        };

        res.status(200).json({ allMessage, code: 200 })

    } catch (error) {
        console.error(error.message);
        res
            .status(500)
            .json({
                err:
                    error.kind === "ObjectId"
                        ? "Message with this id not found"
                        : "Internal server error",
                code: 500,
            });
    };
});

/*@route  api/update/:id
  @desc   this end point used to fetch single by id message
  @access Public this api will accessable to anyone
*/
router.post('/update/:id', async (req, res) => {
    try {

        const { name, email, message } = req.body;

        let updateMessage = await Message.findById(req.params.id);

        if (!updateMessage) {
            res.status(404).json({ err: "Message not found", code: 404 });
        };

        if (name) {
            updateMessage.name = name;
        };
        if (email) {
            updateMessage.email = email;
        };
        if (message) {
            updateMessage.message = message;
        };

        const result = await updateMessage.save();

        res.status(200).json({ result, code: 200 });

    } catch (error) {
        console.error(error.message);
        res
            .status(500)
            .json({
                err:
                    error.kind === "ObjectId"
                        ? "Message with this id not found"
                        : "Internal server error",
                code: 500,
            });
    };
});

/*@route  api/message/delete/:id
  @desc   this end point used to delete Message
  @access Public this api will accessable to anyone
*/
router.delete('/message/delete/:id', async (req, res) => {
    try {

        let message = await Message.findById(req.params.id);

        if (!message) {
            res.status(404).json({ err: "message not found", code: 404 });
        };

        await message.remove();

        res.status(200).json({ message: "Message deleted successfully", code: 200 });


    } catch (error) {
        console.error(error.message);
        res
            .status(500)
            .json({
                err:
                    error.kind === "ObjectId"
                        ? "Message with this id not found"
                        : "Internal server error",
                code: 500,
            });
    };
});


module.exports = router;