module.exports = {
config: {
  name: "goiadmin",
  aurthor:"Nazrul",// Convert By Nazrul
  role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "love",
  guide: "{pn}"
},
  onStart: async function ({ api, event }) {
  if (event.senderID !== "100049220893428") {
    var aid = ["100049220893428"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["আ্ঁমা্ঁর্ঁ ব্ঁস্ঁ কে্ঁ ট্যাঁগ্ঁ না্ঁ ক্ঁরে্ঁ এ্কঁটা্ঁ gf দে্ঁও্ঁ ..!!","_এতো ডাকছো কেনো গো 😒","_𝙆𝙞 𝘽𝙤𝙡𝙗𝙞 𝘽𝙤𝙡 😾","_𝙄 𝙇𝙊𝙑𝙀 𝙔𝙊𝙐 💫"];
      api.setMessageReaction("💙", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
},
  }; 
