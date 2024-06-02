const axios = require("axios");
const { createReadStream, unlinkSync } = require("fs");
const { resolve } = require("path");

module.exports = {
	config: {
		name: "sendnoti",
		version: "1.4",
		author: "cliff",
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "Tạo và gửi thông báo đến các nhóm",
			en: "Create and send notification to groups",
		},
		longDescription: {
			vi: "Tạo và gửi thông báo đến các nhóm do bạn quản lý",
			en: "Create and send notification to groups that you manage",
		},
		category: "box chat",
	},

	onStart: async function ({ api, event, args }) {
		if (this.config.author !== "cliff") {
			return api.sendMessage(
				`[ 𝑪𝒓𝒆𝒅𝒊𝒕 𝒘𝒂𝒔 𝑪𝒉𝒂𝒏𝒈𝒆𝒅 ]
				 
				𝑴𝑬𝑺𝑺𝑨𝑮𝑬:
				𝑹𝒆𝒑𝒍𝒆𝒄𝒆 𝑪𝒓𝒆𝒅𝒊𝒕 𝑻𝒉𝒆𝒏 𝑻𝒓𝒚.
				𝑶𝒘𝒏𝒆𝒓 𝒍𝒊𝒏𝒌: 
https://www.facebook.com/Nazrul.404.Cyber`,
				event.threadID,
				event.messageID
			);
		}

		const threadList = await api.getThreadList(100, null, ["INBOX"]);
		let sentCount = 0;
		const custom = args.join(" ");

		async function sendMessage(thread) {
			try {
				await api.sendMessage(
					`«------•}I|[ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𝐅𝐫𝐨𝐦 𝐀𝐝𝐦𝐢𝐧 𝐀𝐧𝐝 𝐎𝐰𝐧𝐞𝐫 ]|I{•------»
⊰᯽⊱┈──╌❊⛱️💫⛱️❊╌──┈⊰᯽⊱
👤  | 𝐍𝐚𝐦𝐞 : 𝑵𝒂𝒛𝒓𝒖𝒍⚡
━━━━━━━━🖤━━━━━━━━━
╭┈ ❒ 💌 | 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 :
╰┈➤ ${custom}
♡¸.•*━━━━━━💌━━━━━━*•.¸♡
.`,
					thread.threadID
				);
				sentCount++;

				const content = `${nazrul}`;
				const languageToSay = "tl";
				const pathFemale = resolve(
					__dirname,
					"cache",
					`${thread.threadID}_female.mp3`
				);

				await global.utils.downloadFile(
					`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
						content
					)}&tl=${languageToSay}&client=tw-ob&idx=1`,
					pathFemale
				);
				api.sendMessage(
					{ attachment: createReadStream(pathFemale) },
					thread.threadID,
					() => unlinkSync(pathFemale)
				);
			} catch (error) {
				console.error("Error sending a message:", error);
			}
		}

		for (const thread of threadList) {
			if (sentCount >= 20) {
				break;
			}
			if (
				thread.isGroup &&
				thread.name !== thread.threadID &&
				thread.threadID !== event.threadID
			) {
				await sendMessage(thread);
			}
		}

		if (sentCount > 0) {
			api.sendMessage(`› Sent the notification successfully.`, event.threadID);
		} else {
			api.sendMessage(
				"› No eligible group threads found to send the message to.",
				event.threadID
			);
		}
	},
}; 
