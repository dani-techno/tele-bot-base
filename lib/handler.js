/**
* Made by: Dani Technology (Full Stack Engineer)
* Created on: November 6, 2024
* Contact developer:
* - WhatsApp: +62 838-3499-4479 or +62 823-2066-7363
* - Email: dani.technology.id@gmail.com
* - GitHub: https://github.com/dani-techno
*/

const handleResponse = require('../commands');

module.exports = async (client, message, id, username, prefix) => {
    if (message.startsWith(prefix)) {
        const command = message.slice(prefix.length).trim();

        try {
    await handleResponse(client, command, id);
  } catch (error) {
    console.error(error);
  }
    }
};