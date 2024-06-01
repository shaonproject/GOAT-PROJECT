const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "Nazrul",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const botName = "𝐣𝐀𝐧𝐢 𝐧𝐀𝐡 😨🫦";
		const botPrefix = "/";
		const authorName = "ＮＡＺＲＵＬ 💕⛱️";
		const ownAge = "𝟏𝟖+";
		const messenger = "m.me/100049220893428;
		const authorFB = "https://www.facebook.com/Nazrul.404.Cyber";
		const authorNumber = "𝟎𝟏𝟕𝟒𝟐𝟖𝟔𝟑𝟓𝟑𝟑";
		const Status = "_𝐒𝐈𝐍𝐆𝐋𝐄 💫⛱️";
		const urls = JSON.parse(fs.readFileSync('nazrul.json'));
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `💫《  𝐁𝐎𝐓 𝐀𝐍𝐃 𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 》💫
\𝐁𝐨𝐭 𝐍𝐚𝐦𝐞: ${botName}
\𝐁𝐨𝐭 𝐚𝐧𝐝 𝐒𝐲𝐬𝐭𝐞𝐦 𝐩𝐫𝐞𝐟𝐢𝐱: ${botPrefix}
\𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞: ${authorName}
\𝐀𝐠𝐞 : ${ownAge}
\𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐒𝐡𝐢𝐩: ${Status}
\𝐖𝐩 𝐍𝐮𝐦𝐛𝐞𝐫: ${authorNumber}
\𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐥𝐢𝐧𝐤: ${authorFB}
\𝐃𝐀𝐓𝐄: ${date}
\𝐍𝐎𝐖 𝐓𝐈𝐌𝐄: ${time}
\𝐀𝐧𝐲 𝐇𝐞𝐥𝐩 𝐂𝐨𝐧𝐭𝐚𝐜𝐭: ${messenger}
\𝐁𝐎𝐓 𝐔𝐏𝐓𝐈𝐌𝐄: ${uptimeString}
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
}; 
