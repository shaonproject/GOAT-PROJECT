const axios = require('axios');
const fs = require('fs-extra');

module.exports = {
  config: {
    name: "dl", 
    version: "1.0.1",
    author: "Dipto",
    countDowns: 2,
    role: 0,
    description: "Download video from tiktok, facebook, Instagram, YouTube, and more",
    Category: "media",
    usage: {
      en: "[video_link]"
    }
},

  onStart: async function ({ api, args, event, message }) {
    const dipto = event.messageReply?.attachments[0]?.url || args[0];

    if (!dipto){
       api.setMessageReaction("❌", event.messageID, (err) => {}, true);
    }
  try {
       api.setMessageReaction("⏳", event.messageID, (err) => {}, true);

    const path = __dirname + `/cache/dip.mp4`;

    const { data } = await axios.get(`https://noobs-api2.onrender.com/dipto/alldl?url=${encodeURIComponent(dipto)}`);

    const vid = (await axios.get(data.result, { responseType: "arraybuffer", })).data;

    fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));
     api.setMessageReaction("✅", event.messageID, (err) => {}, true);

    api.sendMessage({ 
      body: `🙂🤍`, 
      attachment: fs.createReadStream(path),
    }, event.threadID, () => fs.unlinkSync(path), event.messageID);
if (dipto.startsWith('https://i.imgur.com')){
const dipto3 = dipto.substring(dipto.lastIndexOf('.'));

  const response = await axios.get(dipto, { responseType: 'arraybuffer' });

const filename = __dirname + `/cache/dipto${dipto3}`;

    fs.writeFileSync(filename, Buffer.from(response.data, 'binary'));
    api.sendMessage({body: `✅ | Downloaded from link`,attachment: fs.createReadStream(filename)},event.threadID,
  () => fs.unlinkSync(filename),event.messageID)
}
} catch (error) {
    api.setMessageReaction("❎", event.messageID, (err) => {}, true);
api.sendMessage(error, event.threadID, event.messageID);
  }
  },
	    } 
