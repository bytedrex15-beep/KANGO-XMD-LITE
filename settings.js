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

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0tyWG9FdzIrYWNLRVI3QlRkeXIrRHdYNHRRVldmOS9iK212TlU5cmYzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakxTRy8xcWYvRzUrMWxzR2R4WHBiUkRtb1MwYjBNU1JBbG5HU3lkRXIxOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTTBhN3RjZ2dDN1VqT1d6bTVWeUFzTzZrY1V2dG02SmUrM3R4R244elg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSZFpnUUYzRmhrZ2E3WTg1NGxjK3ZoYlR1bG03aE1aV0V6SDFUVEdzTkZNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBbDhmcDN2T0hYSUNNcXAxalkwQktpL2o1anRqa0tPN2gxN29qOURSVU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtkdDhpcmtMb0hqOXFGdzFYTTFTb2U3K0NZN280ZW94L3F4cmN5TTNoeTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0pGVFJyMnp3SzFzNDREU1pxNlVTRmtXellPNFVJM0tTQmVTN2s4eWNVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3ZoVmU1QTVCVStmTFdlYjQ0WC9iSzZnM0xOY0N4SGpUcDI5Z3BRcXd5bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im40WG9IeUM3cFdZSW01OGVIbjJQZlhqUWNRTkM2OUgvR0pLVWNkUVpQd0FjeUpRY2hDY3ZOU3dvZU1VMmlFRjJUMGFsa2krc2pESysyUzhDZENHT2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTIsImFkdlNlY3JldEtleSI6InNmVEZpWE8yeHd0VTRhTnJlaUl1Ky9uaFZZeFFJMWdQR21JK0VHWTUza0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTQsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTQsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiU0wxNFJOQTkiLCJtZSI6eyJpZCI6IjI1NTc0MzE0MDQ3NjoyMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJCeXRlMHhGRiIsImxpZCI6IjIwNzUzNzYxODAzMDY2MjoyMEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BDVHdQa0dFTXluM013R0dBMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpWQkYvb045dTZLVngrL2pDeUY0MW5FT1hSVitKOXVHbkZOQlFVTy82VXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkxpSVhabVVXR1F1em9rRUhWUHo0eG1tdnBwZWJDM0tQNllSUnNTZ3Exc0Vwekhud0ZNK1NWUE9xTTdsZkgwWFVSdmc2L0tJNUc0RHBNWFB2T0ovc0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwOHNUUUJxay9aZDdRZlpQT0N2QUVmY1VTS2prZllRZWhod3ltRTZVR2xXZDBoaXVOQXFlWWdGTFB2YjhWa0hGZmthL09tc21EUk1KM1A5Q2hzQU1qZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIwNzUzNzYxODAzMDY2MjoyMEBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1ZRUmY2RGZidWlsY2Z2NHdzaGVOWnhEbDBWZmlmYmhweFRRVUZEditsTCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSURRZ0kifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzcxNTA4Njk5LCJsYXN0UHJvcEhhc2giOiIyRzRBbXUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVYViJ9' 
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
