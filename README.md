## Telegram Bot Base - Node-TB-API

## Fitur
* Total Features
* Start
* Text
* Image

## Instalasi
### Instal Perangkat Lunak/Paket-Paket
#### Untuk Linux
```bash
sudo apt-get install nodejs
sudo apt-get install git
sudo apt-get install yarn
```

#### Untuk Windows
```bash
choco install nodejs
choco install git
choco install yarn
```

#### Untuk MacOS
```bash
brew install node
brew install git
brew install yarn
```

#### Untuk Android (Termux)
```bash
pkg install nodejs
pkg install git
pkg install yarn
```

### Download/Klon Proyek
```bash
git clone https://github.com/dani-techno/tele-bot-base.git
```

### Pindah Direktori (CD)
```bash
cd tele-bot-base
```

### Token BotFather
Untuk mengatur token dari BotFather, edit file `./config.js` dan ubah nilai `token` seperti contoh di bawah ini:

```javascript
token: 'Your-API-Key' // Masukkan token dari BotFather di sini
```

Pastikan Anda telah mendapatkan token dari BotFather melalui Telegram. Jika belum, Anda dapat mengikuti panduan pembuatan bot di [BotFather Documentation](https://core.telegram.org/bots#botfather). 

### Application Programming Interface (API)
#### Dapatkan Kunci API
Daftar dan dapatkan kunci API:
<a href="https://forestapi.web.id">https://forestapi.web.id</a>

#### Edit ./config.js > api
```javascript
api: {
  ...
  secret_key: 'Your-API-Key' // Masukan API Key dari Forest API disini
}
```

### Instal Dependensi
#### Menggunakan Npm
```bash
npm install
```
#### Atau Menggunakan Yarn
```bash
yarn install
```

### Instal Nodemon
#### Menggunakan Npm
```bash
npm install nodemon -g
```
#### Atau Menggunakan Yarn
```bash
yarn install nodemon -g
```

### Jalankan Server
#### Menggunakan Npm
```bash
npm run start
```

#### Atau Menggunakan Yarn
```bash
yarn run start
```

#### Atau Menggunakan Node
```bash
node run start
```

#### Atau Menggunakan Bun
```bash
bun run start
```

### Jalankan Server (Auto Restart)
#### Menggunakan Nodemon
```bash
nodemon run start
```

## Informasi
* Pembuat / Pengembang: Dani Technology - Full Stack Engineer
* Kontak Pembuat / Pengembang: +62 838-3499-4479 or +62 823-2066-7363 (WhatsApp), dani.technology.id@gmail.com (Email)

## Terimakasih Kepada
* Dani Technology - Full Stack Engineer (Pembuat / Pengembang)
* Forest API | <a href="https://forestapi.web.id">www.forestapi.web.id</a> (Penyedia API)
* @gochomugo & @yagop (Penyedia Library "Node Telegram Bot API")