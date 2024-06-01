const fs = require('fs-extra');
const axios = require('axios');

module.exports.config = {
  name: "tik",
  aliases: ["tiktok", "tikdl", "tiktokvd" ], 
  version: "1.0.",
  role: 0,
  author: "nazrul",
  description: "TikTok Video Downloader",
  Category: "video downloader",
  usages: "[tiktok video link]",
  countDowns: 2
};

module.exports.onStart = async function ({ api, event, args }) {
  let link = args.join(" ");

  if (!link) {
    api.sendMessage("Please put a valid TikTok video link", event.threadID, event.messageID);
    return;
  }

  api.sendMessage(" 𝐃𝐨𝐰𝐧𝐥𝐨𝐚d𝐢𝐧𝐠 𝐕𝐢d𝐞𝐨 🐥💫", event.threadID, event.messageID);

  try {
   let path = __dirname + `/cache/`;
    const res = await axios.get(`https://nazrul-apis-09.onrender.com/tiktok?link=${encodeURI(link)}`);
    await fs.ensureDir(path);
   path += 'N4ZR9L.mp4';
    const data = res.data;
    const vid = (await axios.get(data.play, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(vid, 'stream'));
    api.sendMessage({
      body: `😨🫦⛱️`, attachment: fs.createReadStream(path)
    }, event.threadID, () => fs.unlinkSync(path), event.messageID);

  } catch (e) {
    api.sendMessage(`${e}`, event.threadID, event.messageID);
  };
}; 
