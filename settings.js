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

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0hJVEN5ang0VUNwWEhRR2V6WHdNSE5wK1hzZTFDT0pUaUhVNktIb1dsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjhhYkFBZFFXYUROeXBSb2hNMzJ3VTN6bWhtNkZUS0xRYkd1L2FrMzZUdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RWZxdDF3Y21DZ0tmTFg5S0NIQVJkOXhsNFVTZTJRck9UcjZuKy9tZmtjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUa2pPelJqMHozY0Q0TFlCM2d2a2VUZUhyREgzN3BSVUtZUGFiclhLb1djPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtOdGxNRGNxcjVJU0taUTY4Zi92TWRDYUM1QUpNMnplUTB5NlJyeVlTMUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjV1Q2t5OFdKSGRKbEJ4THREQXFLMnRkdlNCZFZoRW9CNDFHK0hpWmJ1MWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUNiZTUyaWlQUWlLV0FtSzdMVGNObFNKVTB3Q3pDU0Y4Y3BicUJuendsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDgwV0NhZ1RRZWtYYlNXMC9Qb0VuZHlQdFljTGhtRkl5UmxiWFBzSDhUQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5HbU9mYjYzMHJtMnZET3BFN2djZ3gwTHpXMnhpZ1FON3BNMUVNbTc3MS82YlFUQ2VCZWNVZlRFY3FGRzRuSEtCcXRadUFra1BwNjEyTTk3UzF5eGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6Im5Ic1FDczY1a240dVhncDhIWnpCaVZWSlZlb0puU3dXcS9ULzBrejIwVjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NzQzMTQwNDc2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNTlGQjQ0Q0I5OTY2QzQ5NzlGMDdBMjc0MTU1NzNDNiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzcxNTI1NTc0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU3NDMxNDA0NzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1MUQ1RDYwNDMyM0NGRjdFRTQ0MDg4QUJBMjUxQjg3IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzE1MjU1NzR9XSwibmV4dFByZUtleUlkIjo4MTQsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTQsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiREJFWUw4MU4iLCJtZSI6eyJpZCI6IjI1NTc0MzE0MDQ3NjoyNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJCeXRlMHhGRiIsImxpZCI6IjIwNzUzNzYxODAzMDY2MjoyNEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BDVHdQa0dFTENyM2N3R0dCRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpWQkYvb045dTZLVngrL2pDeUY0MW5FT1hSVitKOXVHbkZOQlFVTy82VXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlB3d0d0b3FRYnpXQXR5cEd6Njh1enViVloxUW12eUZpMzFoN1ZPTXE3RFBHV011d0E4UndscGkyRnVnQnlhS21jL0VhRmRHeGVjdFBnRHZ4ZHBHM0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2Qm1NQzJQbUFTVytleTRRVUU3a0hPYlY4QU1JWkdqK1RKRXFuVjFtdGYvMUU5T2t2RmdtdHZvcVRJV0NQekQxZkxGTG84aS9DNGU1dFZRenNLNGFpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIwNzUzNzYxODAzMDY2MjoyNEBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1ZRUmY2RGZidWlsY2Z2NHdzaGVOWnhEbDBWZmlmYmhweFRRVUZEditsTCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSURRZ0kifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzcxNTI1NTY4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVYZCIsImxhc3RQcm9wSGFzaCI6IjJHNEFtdSJ9' 
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
