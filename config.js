import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

//Owner Numbers 
global.owner = [
  ['94768738555', 'ASHEN', false],
  [''], 
  [''],
]

//global.pairingNumber = "" //put your bot number here
global.mods = ['94768738555'] 
global.prems = ['94768738555', '94768738555', '94768738555']
global.allowed = ['94768738555']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY'
}

// Sticker WM
global.botname = '𝙏𝙃𝙀 𝙌𝙐𝙀𝙀𝙉 𝘼𝙇𝙀𝙓𝘼 𝘽𝙊𝙏'
global.princebot = '💝𝙏𝙃𝙀 𝙌𝙐𝙀𝙀𝙉 𝘼𝙇𝙀𝙓𝘼💝'
global.packname = 'alexa♥️' 
global.author = 'alexa♥️' 
global.princeig = 'https://www.instagram.com' 
global.princegp = 'https://chat.whatsapp.com/C4mcek6i7aE2P1iDcJpmoo'
global.menuvid = 'https://i.imgur.com/DuMXSPe.mp4'
global.Princesc = 'https://github.com/ashenbro134/THE-ALEXA-BOT' 
global.princeyt = 'https://youtube.com/'
global.Princelog = 'https://i.imgur.com/QfZnEJ7.jpg'
global.thumb = fs.readFileSync('./Assets/alexaalexa.png')

global.wait = '*♻️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 𝙵𝙸𝙻𝙴 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.imgs = '*🖼️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 ɪᴍᴀɢᴇs 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '♻️'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🌀' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
