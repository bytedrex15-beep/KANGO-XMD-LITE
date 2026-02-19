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

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dYdWNMb1hldzViSXZESkpqK05iYk9QZ3BENTMyMTlic1pCOG12TUhGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0lyUUExdTZzOXRiVmllZ1N0UnhidWxJaFE1QlB5NWdqY1pHekJEZDVFTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhT3g5dVBYTU5PcG9KZzFKZHNaUGhiN3BsM3hHeGdoQkFqaS9nZkdmTlVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBeDJGWTlDUk5zOWFsRDUzTjVtYnN1WFNVSVBkT1NYcExBSGJjaGhzeERVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtBcVVlRVZ5cWxXb3pmMXJyMklTMzNuSWQvOFNOYzNMZjZZRHh4YzF5bUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlEwY1ZGeEJYR3pHUEpjMXZHM2Z4SWxaakNiNUx6QloxZFF1RzhvZUxqRm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU9sbFh0QjN1b0lZeDVKblQ4aVUzY3h5MlpBS2lUT2I2b01xNEp3UkdIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUG1tYXRkMlZCbTNYVHBHL3hjS3lINFBqNmtCTGpFY1lpMlZsZ0lEQUtRcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE0WUxwL1RlT0N3Q0VqN2J1NkdrU2phSmwzWklXS0wrRmVzUXRsMFpuNnppYnR3NjlLNXRUUEx3TFZmWVFlT2xYMFFYN1VOdDFQZnFqVEI5NTFsdENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiJ6dW9CVWlwWS9XL1k3VmRCVm9MajM1MHcwc2dUNk9vb1Axc2tqVWY2cWM4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkhFSkFNRU1DIiwibWUiOnsiaWQiOiIyNTU3NDMxNDA0NzY6MjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQnl0ZTB4RkYiLCJsaWQiOiIyMDc1Mzc2MTgwMzA2NjI6MjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQQ1R3UGtHRU9qMzNNd0dHQThnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaVkJGL29OOXU2S1Z4Ky9qQ3lGNDFuRU9YUlYrSjl1R25GTkJRVU8vNlVzPSIsImFjY291bnRTaWduYXR1cmUiOiIxeDR2MTVBMEhwdnh1Ykg0RjdVRGVyUjcwK1o4RGRvdld0RmFRSlQxVEZiRTV3YjUxTExmM3F6ZmphYVFCcGM2RllhSENvRXhtSXVibWpJWFJITHZEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidkZyT3hwSEJaVktnV3MvTkNjb25OQnA5eks2WW0yV05sT2NmdWxZaTlZWUVSOTVHalAwV0VUejBuTU8wY0xIS1FUU08yaEtxTGIvcmVWUlBqeHZKQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMDc1Mzc2MTgwMzA2NjI6MjJAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldWUVJmNkRmYnVpbGNmdjR3c2hlTlp4RGwwVmZpZmJocHhUUVVGRHYrbEwifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlEUWdJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3MTUxODk2NywibGFzdFByb3BIYXNoIjoiMkc0QW11IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFWGMifQ==' 
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
