global.util = require('util')
global.fs = require('fs')
global.fetch = require('node-fetch')
global.chalk = require('chalk')
global.os = require('os')
global.moment = require('moment-timezone')
global.axios = require('axios')
global.cheerio = require('cheerio')
global.scrape = require('./lib/scrape')
global.xfr = require('xfarr-api')
global.yzu = require('yuzzu-api')
global.dhn = require('dhn-api')
global.hxz = require('hxz-api')
global.bochil = require('@bochilteam/scraper')
global.baileys = require('@adiwajshing/baileys')

global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Moderator
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium users

global.devx = 'false'

global.owner = ["972522734920"]
global.APIs = { // API Prefix
//======= name: 'https://website' ========//
  nrtm: 'https://nurutomo.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz',
  hardianto: 'https://hardianto.xyz',
  neoxr: 'https://api.neoxr.eu.org',
  xteam: 'https://api.xteam.xyz',
  zeks: 'https://api.zeks.me' 
}
global.APIKeys = { // APIKey Here
//======= 'https://website': 'apikey' =======//
  'https://api.lolhuman.xyz': '7ecba1cc37eca2e93d6a983b',
  'https://hardianto.xyx': 'hardianto',
  'https://api.neoxr.eu.org': 'yourkey',
  'https://api.xteam.xyz': 'benniismaelapikey',
  'https://api.zeks.me': 'apivinz'
}




 
global.ucpn = ''
global.linkgc = 'https://api.whatsapp.com/send?phone=+972522734920&text=𝐇𝐞𝐲%20𝐕𝐫𝐨🎭'
global.linkig = 'https://instagram.com/skdevilsir?igshid=YmMyMTA2M2Y=  '
global.linkyt = 'https://youtube.com/channel/UCUULVPBn6CEB3shUTHHYuKw'
global.linkfb = 'https://www.facebook.com/profile.php?id=100079513959181'
global.git = 'https://github.com/salman-ofc'
global.web1 = 'https://skdevilser.github.io/'
global.url = 'https://api.whatsapp.com/send?phone=+972522734920&text=𝐇𝐞𝐲%20𝐕𝐫𝐨🎭'

//HEROKU  VARS
global.thumburl = process.env.IMAGE || 'https://i.pinimg.com/474x/de/bd/b2/debdb24645169bf95eecd49f3144315f.jpg'
global.packname = process.env.PACKNAME ||'© sᴋ ᴅᴇᴠɪʟ sᴇʀ-ᴍᴅ'
global.author = process.env.AUTHOR ||'sᴀʟᴍᴀɴ-ᴏғᴄ'
global.name = 'Sk Devil MULTI-DEVICE'
global.session = process.env.SESSION_ID|| ''
global.wm = process.env.WATERMARK|| '© sᴋ ᴅᴇᴠɪʟ sᴇʀ-ᴍᴅ'
global.owner_name = process.env.OWNER_NAME || 'Salman-Ofc'
global.logsmsg = convertToBool(process.env.LOGS)|| false

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}





global.deslink = ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = 'skdevilsir'
global.wait = '_Please Wait_'
global.eror = '_Something went wrong please try again later_'
global.dtu = 'BOT HELP GROUP'
 



global.version = '2.0.1(ʙᴇᴛᴀ)'

global.multiplier = 69 // The higher, The harder levelup
global.nolink = 'No URL Found'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})


