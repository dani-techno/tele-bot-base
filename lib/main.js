/**
* Made by: Dani Technology (Full Stack Engineer)
* Created on: November 6, 2024
* Contact developer:
* - WhatsApp: +62 838-3499-4479 or +62 823-2066-7363
* - Email: dani.technology.id@gmail.com
* - GitHub: https://github.com/dani-techno
*/

const TelegramBot = require('node-telegram-bot-api');
const { token, prefix } = require('../config');
const handleCommand = require('./handler');

const client = new TelegramBot(token, { polling: true });

console.log('Bot Active √');

client.on("message", (data) => {
	console.log(data)
	const id = data.chat.id;
	const message = data.text;
	const username = data.from;

    console.log(`Message: ${message}\nFrom: @${username} - ${id}`);

    handleCommand(client, message, id, username, prefix);
});
