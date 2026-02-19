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

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUJGUTcwb0twalRuZmJ4Z01SMFpRREN6M1VxN3ZVQWhuL3FvSVJtYkRFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjVZU0gwalZHMTh5QkVPSzFqTFhhYnFaMVhPRjVHN0RLWW5oUjZiSUFSOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTHNhSkdTajlGWm1WcmhQNm1IOGpBdGQ2UW5qY1oyNFNZdDlySE1JeldjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4eTROazJkQ1FSUW5DbVpEOFFtRUxxWmdsUHlnZTlBL1AvOFdvSkw2a2lBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFDb2dmNnBidzZibEkxMURWc2c3RnNyWUNmS3gwa2E3dTN0S3JzeGNIRzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndmZTkzQjVjL0xmaWFVZmFEcWtzTDQ1ci82OUlUUVo1MEorK29oU0xDbTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVBPUDBOVEdaTmtwQkdNQkRyLzRNY2lxNG5DRkR4NW9OM3Z5d3BMYUcxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUJuSDFJOHE2QW5GNGJBNGRmbzc0Q3VmSTM2dmNLMVhGOGc1RkQ1a1RXaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1xYnBPSFlhS3I3ZHRpbmFjSXhLOWI0VnFiL25KR3lrL1gvdGNidVZEbHAwa0JuVTJuQVBnRFJvc3FVNlRsY2JYK00yUzFEU3BSelVjeWtJaE5mZmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg1LCJhZHZTZWNyZXRLZXkiOiJCQXBHc29lQ3JNYktrSStJZmRhckVoNEN4aCtjYi96S09OcVE3QStBNWRvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkVKRUFONTFGIiwibWUiOnsiaWQiOiIyNTU3NDMxNDA0NzY6MjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQnl0ZTB4RkYiLCJsaWQiOiIyMDc1Mzc2MTgwMzA2NjI6MjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQQ1R3UGtHRUpMNjNNd0dHQkFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaVkJGL29OOXU2S1Z4Ky9qQ3lGNDFuRU9YUlYrSjl1R25GTkJRVU8vNlVzPSIsImFjY291bnRTaWduYXR1cmUiOiJWV2FhNnh3cndtRU5QZ2U4MHFES0ZKbWRKb01mV0xvN1h5VldkWmxGbGx2bVBxdGt5bkRxdlc2MitTQmpOZ1NlWUhPQWJjWFNYTHl1SlN2aTlnbHNEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibU1oNGRJV1ZtM1dSZmZUL2diem1PcVFJazBEbVFGbmNNRDRSMEJKS0FseVF1V285U3hBSDBMVkhER3V2RzVyZVlPSWFOeTNVUFc3b1FYWGhMY3pyaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMDc1Mzc2MTgwMzA2NjI6MjNAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldWUVJmNkRmYnVpbGNmdjR3c2hlTlp4RGwwVmZpZmJocHhUUVVGRHYrbEwifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlEUWdJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3MTUxOTI2NCwibGFzdFByb3BIYXNoIjoiMkc0QW11IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFWGQifQ==' 
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
