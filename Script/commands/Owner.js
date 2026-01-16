const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "owner",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "SHAHADAT SAHU",
  description: "Show Owner Info with styled box & random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  
  const info = `
╔═════════════════════ ✿
║ ✨ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ✨
╠═════════════════════ ✿
║ 👑 𝗡𝗮𝗺𝗲 : 𝙼𝚄𝙷𝙰𝙼𝙼𝙰𝙳 𝙰𝚁𝙸𝚈𝙰𝙽
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : 𝙰𝚁𝚄𝚄
║ 🎂 𝗔𝗴𝗲 : 𝟭7+
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝙼𝙰𝚁𝚁𝙸𝙴𝙳
║ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 𝗦𝘁𝘂𝗱𝗲𝗻𝘁
║ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝗛𝗦𝗖
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝙳𝙷𝙰𝙺𝙰
╠═════════════════════ ✿
║ 🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
╠═════════════════════ ✿
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
║ https://www.facebook.com/ariyan.xx69
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 :
║ m.me/ariyan.xx69
║ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :
║ wa.me/01327416157
║ ✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 :
║ t.me/@Zoom_2_0_1
╚═════════════════════ ✿
`;

  const images = [
    "https://i.imgur.com/9Lv404D.jpeg",
    "https://i.imgur.com/qWVnEK0.jpeg",
    "https://i.imgur.com/9Lv404D.jpeg",
    "https://i.imgur.com/qWVnEK0.jpeg"
  ];

  const randomImg = images[Math.floor(Math.random() * images.length)];

  const callback = () => api.sendMessage(
    {
      body: info,
      attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
    },
    event.threadID,
    () => fs.unlinkSync(__dirname + "/cache/owner.jpg")
  );

  return request(encodeURI(randomImg))
    .pipe(fs.createWriteStream(__dirname + "/cache/owner.jpg"))
    .on("close", () => callback());
};
