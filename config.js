//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "samkelvin1050@gmail.com";
global.location = "Accra, Ghana";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github = process.env.GITHUB || "https://github.com/Reverseking1/ReverseKing";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/QXbR0M0/IMG-2996.jpg";
global.devs = "233257514504";
global.sudo = process.env.SUDO || "2347019170750";
global.owner = process.env.OWNER_NUMBER || "234701917075/";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://imgur.com/a/p3Mb4qL.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "233257514504";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://reverseking-paircode.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUJGTGFLR0hWL0xlbnBvQjExYnE2ZGNQYzl3MFlFcGNqYjZSeTZnS1ZIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTngrZmlDUllXSmZyTm1rTWFJZ21SYkJLN1FieG93ODBqYTQza2ljZ2N3Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1R29JUEpSQVh5ckdHMG9nYkl4NG12KzI3RjZwTHpURVp0UzQyVjh4eUU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvaE85dlZUYng3clRYVnY3VDkrdDJuU1FVSGloUzcvMFB4STRDMXp6RzJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitNVkplOTFGY3grVERzUU1oYnFsQ3BmN0dBS1ZWb3lJUmVOT0w4TkFoR1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJHR2lBQXY5TWJmU21sNDh6SjJVY05RYmJaQnV1UEtBSkU5cEM2amdLbjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JKbk1OZ2wxRzNqejdJdDBIQ0hmQllsc2xEVU5ybjlybjNNa215TVgwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZCttTzIrdnBLMXg5T2ZmdXk4OGFtc0JvemJSZERHcGxrSFNUVTVTdGwxRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZKWTJpYk9PdXBRaTBDY296TVFSVVBwRnQ3U0FKWFNObmRSeitRdXpNYkJYeXc0YlpDV3VxWmxwRDM3YllhNDNDd0toK3loOEVoSENTS2NxTUdxMmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiJVTDhIc0FQUEpNOFRCL2ovemdyNDZKcG1PTlVnSkdKOENKdllKVCtVY3dNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4WmR1NU9RNlJNV0JQUk9QamtCTW13IiwicGhvbmVJZCI6ImJkNjkyMDRiLTdkM2QtNDk2MC05YmY0LWYxY2Y4MDBjMGY3YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNcWFDY1BWalVQMG1KTElkeHN6T0FVU3BRVkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHlGbWEyUVJpaU5GSVFLVFJXeXc2eVoyTC80PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlDWkxMNDlRIiwibWUiOnsiaWQiOiIyMzQ3MDE5MTcwNzUwOjZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01hUjlmSUhFUDNDa3JrR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImhPeVh6VS9UaDZBN1J5b2NlUWN2bUVPdTZxbDg2TnhQS0gzbGNtNXlmR2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFlSzBKWmxtWkRDdTJXNGZzbE5iVzZ2MHdkclZoeVBvUEJXZlcrdXZvNVcrVmtmWHJRbHp4YmdEc094RmVkOG9iTGdsb2gyUUVjYzd5VEl1R0F6aUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvbm4zTHhzWU9IYmpnYys5Y09aQW1EV2x0dHc5YmpiRjhqY1ZZaTc2c2tNNy9abk5JeTFEcTR6WklTOFlMaFZqWFZmWXI2b1M2ZkxrWkhJNXhaOE9pdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwMTkxNzA3NTA6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZVHNsODFQMDRlZ08wY3FISGtITDVoRHJ1cXBmT2pjVHloOTVYSnVjbnhuIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNDUzODk4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUsyUCJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`REVERSEKING™`",
  author: process.env.PACK_AUTHER || "REVERSEKING",
  packname: process.env.PACK_NAME || "REVERSEKING",
  botname: process.env.BOT_NAME || "ReverseKing",
  ownername: process.env.OWNER_NAME || "REVERSEKING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "R E V E R S E K I N G").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
