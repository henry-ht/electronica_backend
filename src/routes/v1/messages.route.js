const express = require('express');
// const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const messageController = require('../../controllers/message.controller');
// const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/send').post(/* auth(), validate(userValidation.createUser), */ messageController.sendMsj);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: Messages sent and reception
 */

/**
 * @swagger
 * /messages/send:
 *   post:
 *     summary: send
 *     description: Messages sent
 *     tags: [Messages]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *             properties:
 *               message:
 *                 type: string
 *             example:
 *               message: fake messages
 *     responses:
 *       "201":
 *         description: Message sent
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/message'
 */

