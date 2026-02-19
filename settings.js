//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFMSGRFV3E4NFpsRXFiZU9zeXFIUXo5dldVY3BoS3JCSWFjT2xmUHgybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVhKcW9DbXNwb00rdUxId2RSazNXUlRPTUM1UU9qdytGTXZvU0lJZ2pHTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTnhRS1d3Q1JsSE1PM3pkUmc3a1k5emR2OEJqYzFNd3pTM1ZPRTY2SjBzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLS2R3aEZQa1RvaFhwK3NDRmdiUzhWNmRJczBsQTZSTm0wSFNIS0s1QVhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhOMDZQdlJLdnUvYVdoSjE4WnovN2RKNFhRY1hqaTZQNDlpNUd2Ry90VXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBrZERHMEtqdmhvZlpPYVR2YytjOWg3S3htZnBZMjhGdkQvK2crZk9iaHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JwekJvMkFUVll4TlpxTHFLdm9FblFucEZISjYwazlvaTMzTkVYMnpYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1czWmJEalRpTE1LOEVXY3A2ZGFweFVDbm8zalp4RUVPS3oyVnFjUStqOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxaSmhjcTJmSlE1andoS2R1WXJuQjBqc1RzalIrK3ZYSDZkMFREUk9TTVJ6U0hEM0RuV3B4SG1ib0xHUlV4UndOdVJ6dnIyTm00OVBFVFUyYlBwRUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ1LCJhZHZTZWNyZXRLZXkiOiJmQU1XeWxhNHlTVWlyUW4vT3pDOTRSZ1c0UEJkTUs2SlB2OWdYdWJacCswPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkRUWDFBWjVEIiwibWUiOnsiaWQiOiIyNTU3NDMxNDA0NzY6MjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQnl0ZTB4RkYiLCJsaWQiOiIyMDc1Mzc2MTgwMzA2NjI6MjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQQ1R3UGtHRU4vVTNNd0dHQTRnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaVkJGL29OOXU2S1Z4Ky9qQ3lGNDFuRU9YUlYrSjl1R25GTkJRVU8vNlVzPSIsImFjY291bnRTaWduYXR1cmUiOiJzc0dFMVZRZFo3a29Lc2IyZE5VWVZQdmhZd2ZFMXFPM0F3STlaZExVZmwrNG40SnFqdHlPd09TMExucW1kY29HUXBrbHhaY1U3RmFsWDVvSyt4cE9Edz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT0RPTTZPcE9UTUtvVXZNV3ZYVEcyOHk0RXNlUm9JOWsvdjd4UmluTGZxMit0a1NDaDlIOW1CK29PS3F1ZDlGTVpHdVQrKzRoVjI2cVUxdG53N09uQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMDc1Mzc2MTgwMzA2NjI6MjFAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldWUVJmNkRmYnVpbGNmdjR3c2hlTlp4RGwwVmZpZmJocHhUUVVGRHYrbEwifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlEUWdJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3MTUxNDQ3NywibGFzdFByb3BIYXNoIjoiMkc0QW11IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFWGMifQ==' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '255743140476' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
