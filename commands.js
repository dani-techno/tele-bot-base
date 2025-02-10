/**
* Made by: Dani Technology (Full Stack Engineer)
* Created on: November 6, 2024
* Contact developer:
* - WhatsApp: +62 838-3499-4479 or +62 823-2066-7363
* - Email: dani.technology.id@gmail.com
* - GitHub: https://github.com/dani-techno
*/

const fs = require('fs');

module.exports = (client, command, id) => {
    switch (command) {
        case 'total_features':
        const totalFeatures = (fs.readFileSync('./commands.js').toString().match(new RegExp('break', 'g')) || []).length - 1;
        client.sendMessage(id, `Jumlah fitur saat ini: ${totalFeatures}`);
          break;
        case 'start':
        case 'menu':
            client.sendMessage(id, 'Hai, selamat datang!');
            break;
        case 'text':
            client.sendMessage(id, 'Text');
            break;
        case 'photo':
            client.sendPhoto(id, 'https://www.remove.bg/example.jpg', { caption: 'Oke' });
            break;
        default:
            client.sendMessage(id, 'Perintah tidak dikenali.');
            break;
    }
};