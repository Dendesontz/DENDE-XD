
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
// add your Session Id make sure it starts with malvin~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "DENDE-XD",
// add bot name here for menu
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "* 𝑯𝒊 𝒘𝒊𝒔𝒉 𝒀𝒐𝒖𝒓 𝑭𝒊𝒏𝒆𝒍𝒚 𝒊 𝒉𝒂𝒗𝒆 𝒔𝒆𝒆𝒏 𝒚𝒐𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 ...𝒃𝒖𝒕 𝒊 𝒂𝒔𝒌 𝒚𝒐𝒖 𝒕𝒐 𝒔𝒖𝒑𝒑𝒐𝒓𝒕 𝒎𝒆 𝒃𝒚 𝒔𝒖𝒃𝒔𝒄𝒓𝒊𝒃𝒊𝒏𝒈/𝒔𝒉𝒂𝒓𝒊𝒏𝒈/𝑳𝒊𝒌𝒊𝒏𝒈 𝒎𝒚 𝒔𝒐𝒏𝒈𝒔 𝒗𝒊𝒅𝒆𝒐/ 𝒂𝒍𝒍 𝒕𝒐𝒈𝒆𝒕𝒉𝒆𝒓 𝒎𝒚 𝒀𝒐𝒖𝒕𝒖𝒃𝒆 𝒄𝒉𝒂𝒏𝒏𝒆𝒍 𝒈𝒐𝒆𝒔 𝒘𝒊𝒕𝒉 𝒏𝒂𝒎𝒆 𝒔𝒊𝒕𝒆𝒔𝒔𝒘𝒂𝒉𝒊𝒍𝒊 𝒐𝒓 𝒓𝒆𝒂𝒄𝒉 𝒊𝒕 𝒃𝒚 𝒄𝒍𝒊𝒄𝒌𝒊𝒏𝒈 𝒕𝒉𝒊𝒔 𝒍𝒊𝒏𝒌 👉👉👉 https://www.youtube.com/@bitesswahili 𝑳𝒂𝒔𝒕𝒍𝒚 𝒘𝒊𝒔𝒉 𝒉𝒂𝒗𝒆 𝒂 𝒈𝒐𝒐𝒅 𝒕𝒊𝒎𝒆*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/zjp3f0.png",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lf0w9j.png",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦DENDE-XD✦ ғʀᴏᴍ 𝑫𝒆𝒏𝒅𝒆𝒔𝒐𝒏 𝒅𝒆𝒕𝒛⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Dendesontz/DENDE-XD",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "DENDE-XD",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "🕳️,👑,🎓,🫶,🌎,🇿🇦,🇹🇿,✍️,🫡,🪘,🎙️,💫,🔥,🤝,🫂,🎶,☠️,👽,🌒",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "255675364131",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "𝑫𝒆𝒏𝒅𝒆𝒔𝒐𝒏 𝒅𝒆𝒕𝒛",
// add bot owner name 

              DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝑫𝒆𝒏𝒅𝒆𝒔𝒐𝒏 𝒅𝒆𝒕𝒛*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 

        AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

     DEV: process.env.DEV || "255675364131",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox/ same if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "0.0.6",

};


