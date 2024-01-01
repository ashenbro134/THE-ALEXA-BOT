import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Karachi').format('HH')
let wib = moment.tz('Asia/Karachi').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `💝 The user is not found in my database`
let pp = (thumb)
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let quote = quotes[Math.floor(Math.random() * quotes.length)];

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = ` *💝𝙏𝙃𝙀 𝙌𝙐𝙀𝙀𝙉 𝘼𝙇𝙀𝙓𝘼💝*


╭━⊱「Wᴇʟᴄᴏᴍᴇ ᴛᴏ ᴄᴏᴍᴍᴀɴᴅs ᴍᴇɴᴜ⊱━╮
│
│📚✫ ➤ 「${usedPrefix}𝘚𝘵𝘶𝘥𝘺𝘮𝘦𝘯𝘶
│🛡️✫ ➤「${usedPrefix}𝘖𝘸𝘯𝘦𝘳𝘮𝘦𝘯𝘶
│💌✫ ➤ 「${usedPrefix}𝘉𝘰𝘵𝘮𝘦𝘯𝘶 
│🧬✫ ➤ 「${usedPrefix}𝘎𝘳𝘰𝘶𝘱𝘮𝘦𝘯𝘶
│📥✫ ➤ 「${usedPrefix}𝘋𝘭𝘮𝘦𝘯𝘶
│🧰✫ ➤ 「${usedPrefix}𝘛𝘰𝘰𝘭𝘮𝘦𝘯𝘶
│🎨✫ ➤ 「${usedPrefix}𝘚𝘵𝘪𝘤𝘬𝘦𝘳𝘮𝘦𝘯𝘶
│🎉✫ ➤ 「${usedPrefix}𝘍𝘶𝘯𝘮𝘦𝘯𝘶 
│🎮✫ ➤ 「${usedPrefix}𝘎𝘢𝘮𝘦𝘮𝘦𝘯𝘶
│🎩✫ ➤ 「${usedPrefix}𝘓𝘰𝘨𝘰𝘮𝘦𝘯𝘶

│ *${usedPrefix}ᴍᴇɴᴜ3 ғᴏʀ sᴘᴇᴄɪᴀʟ ᴍᴇɴᴜ ʟɪsᴛ*
│ *${usedPrefix}ʟɪsᴛ ғᴏʀ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ*
│
│ *${greeting}*
╰━━━━━━━━━━━━━━━━━━━━━━━━╯
📚 *_Quote of the day: ${quote}_* 📚
`


    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false)
    m.react(done)

}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu', 'help','h','commands'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
    function ucapan() {
      const time = moment.tz('Asia/Karachi').format('HH')
      let res = "happy early in the day☀️"
      if (time >= 4) {
        res = "Good Morning 🌄"
      }
      if (time >= 10) {
        res = "Good Afternoon ☀️"
     }
      if (time >= 15) {
        res = "Good Afternoon 🌇"
      }
      if (time >= 18) {
        res = "Good Night 🌙"
      }
      return res
    }
    const quotes = [
      "මම කම්මැලි නැහැ, මම මගේ බලශක්ති ඉතිරිකිරීමේ මාදිලියේ සිටිමි.",
       "ජීවිතය කෙටියි, ඔබට දත් ඇති විට සිනාසෙන්න.",
       "මම නරක බලපෑමක් වෙන්න පුළුවන්, නමුත් මම විනෝදජනකයි!",
       "මම විස්කි ආහාර වේලක සිටිමි. මට දැනටමත් දින තුනක් අහිමි වී ඇත.",
       "ඇයි සමහර ජෝඩු ජිම් එකට යන්නෙ නැත්තෙ? මොකද සමහර සම්බන්ධකම් හරියන්නෙ නැති නිසා.",
       "මම මගේ බිරිඳට කිව්වා එයාගේ වැරදි වැලඳගන්න කියලා... එයා මාව බදාගත්තා.",
       "මම බහුකාර්යයන් කිරීමට විශිෂ්ටයි. මට කාලය නාස්ති කළ හැකිය, ඵලදායි නොවන අතර එකවර කල්දැමිය හැකිය.",
       "ඔබේ සපත්තු ලේස් බැඳීමට නැමී ඔබ එහි සිටින විට ඔබට තවත් කුමක් කළ හැකිදැයි කල්පනා කරන විට ඔබ වයසට යන බව ඔබ දන්නවා.",
       "මම නිදාගන්න හරිම දක්ෂයි, මට ඒක ඇස් පියාගෙන කරන්න පුළුවන්.",
       "ඔබ ජීවතුන් අතර සිටින බව කිසිවෙකු ගණන් නොගන්නා බව ඔබ සිතන්නේ නම්, ගෙවීම් කිහිපයක් මග හැරීමට උත්සාහ කරන්න.",
       "මම හිතුවේ මම අවිනිශ්චිතයි කියලා, නමුත් දැන් මට එච්චර විශ්වාස නැහැ.",
       "ඔබට ඔවුන්ව ඒත්තු ගැන්වීමට නොහැකි නම්, ඔවුන්ව ව්යාකූල කරන්න.",
       "මම මගේ බිරිඳට කිව්වා ඇය ඇහිබැම ඉතා ඉහළට අඳිනවා කියලා. ඇය පුදුම වෙලා වගේ හිටියා.",
       "මම අවුල් නැහැ, මම ඉන්නේ ගුරුත්වාකර්ෂණය පරීක්ෂා කිරීමේ මෙහෙයුමක පමණයි.",
       "මම මගේ බිරිඳට කිව්වා ඇය තවත් තල්ලු කිරීම් කළ යුතුයි. ඇය කිව්වා, මට සියයක් කරන්න පුළුවන්! ඉතින් මම දහයට ගණන් කරලා නැවැත්තුවා.",
       "ජීවිතය චොකලට් පෙට්ටියක් වැනි ය; ඔබ බඩගිනි නම් එය වැඩි කල් පවතින්නේ නැත.",
       "මම ආශ්චර්ය වූවා යැයි මම නොකියමි, මම කියන්නේ මා සහ වොන්ඩර් වුමන් එකම කාමරයක සිටින කිසිවෙක් කිසි දිනෙක දැක නැත.",
       "ඇයි ඔබ ට්‍රොල් එකක් වගේ ඇහැරෙනකොට ඒකට ලස්සන නින්ද කියලා කියන්නේ?",
       "මට හැම විටම මගේ දුරකථනය නැති නොවේ, නමුත් මම එසේ කරන විට, එය සැමවිටම නිශ්ශබ්දව පවතී.",
       "මගේ ඇඳ මායාකාරී ස්ථානයක් වන අතර එහිදී මා කළ යුතු සියල්ල මට හදිසියේම සිහිපත් වේ.",
       "ඔබ කට වහගෙන සිටින විට ඔබ කරන ශබ්දයට මම කැමතියි.",
       "මම තර්ක කරන්නේ නැහැ, මම නිවැරදි ඇයි කියලා පැහැදිලි කරනවා.",
       "මම සම්පූර්ණ මෝඩයෙක් නොවේ, සමහර කොටස් අතුරුදහන්.",
       "ජීවිතය ඔබට ලෙමන් ගෙඩි දෙන විට, යමෙකුගේ ඇසට ගසන්න.",
       "මට තරහ පාලනයක් අවශ්‍ය නෑ. ඔයා මාව තරහා කරන එක නවත්තන්න ඕනේ.",
       "මම බැට්මෑන් කියලා මම කියන්නේ නැහැ. මම කියන්නේ මමයි බැට්මෑන්වයි එකම කාමරයක ඉන්නවා කවුරුත් දැකලා නෑ කියලා.",
       "මම සුපර්මෑන් කියලා මම කියන්නේ නැහැ. මම කියන්නේ කවුරුත් මාවයි සුපර්මෑන්වයි එකම කාමරයක ඉන්නවා දැකලා නැහැ කියලා විතරයි.",
       "මම ස්පයිඩර් මෑන් කියලා මම කියන්නේ නැහැ. මම කියන්නේ මමයි ස්පයිඩර් මෑන්යි එකම කාමරයක ඉන්නවා කවුරුත් දැකලා නැහැ කියලා.",
       "මම සුපිරි වීරයෙක් කියලා මම කියන්නේ නැහැ. මම කියන්නේ මම සහ සුපිරි වීරයෙක් එකම කාමරයක ඉන්නවා කවදාවත් කවුරුත් දැකලා නැහැ කියලා.",
       "පණුවන් ගොරෝසු වන අතර උදෑසන මෝඩ බැවින් මුල් කුරුල්ලාට පණුවා සිටිය හැක.",
       "ජීවිතය ඔබට ලෙමන් ලබා දෙන්නේ නම්, ලෙමනේඩ් සාදන්න. එවිට ජීවිතය ඔවුන්ට වොඩ්කා ලබා දී ඇති අයෙකු සොයාගෙන සාදයක් පවත්වන්න!",
       "සාර්ථකත්වයේ මාවත සෑම විටම ඉදිවෙමින් පවතී.",
       "මම කොච්චර දක්ෂද කියනවා නම් සමහර වෙලාවට මම කියන දේ එක වචනයක්වත් මට තේරෙන්නේ නැහැ.",
       "සමහර අයට අවශ්‍ය වන්නේ ඉහළ පහක් පමණි. මුහුණේ. පුටුවක් සමඟ.",
       "මම පරිපූර්ණයි කියලා මම කියන්නේ නැහැ, නමුත් මම ගොඩක් සමීපයි.",
       "හිරු එළිය නැති දවසක්, ඔබ දන්නවා, රාත්‍රිය වගේ.",
       "අනාගතය පුරෝකථනය කිරීමට හොඳම මාර්ගය එය නිර්මාණය කිරීමයි.",
       "ඔබට හොඳ ආදර්ශයක් විය නොහැකි නම්, ඔබට භයානක අනතුරු ඇඟවීමක් වීමට සිදුවනු ඇත.",
       "මම බේරෙන්න බොත්තම ඔබන්නේ ඇයි කියලා මම දන්නේ නැහැ. මම මෙතනින් යන්න හදන්නේ.",
       "මම කම්මැලි නැහැ. මම බලශක්ති ඉතිරිකිරීමේ මාදිලියේ සිටිමි.",
       "මට කොණ්ඩා මෝස්තරකරුවෙකු අවශ්‍ය නැත, මගේ කොට්ටය මට සෑම උදෑසනකම නව කොණ්ඩා මෝස්තරයක් ලබා දෙයි.",
       "මට නරක අත් අකුරු නැත, මට මගේම අකුරු තිබේ.",
       "මම අවුල් නැහැ. බිම මට වෛර කරනවා, මේස පුටු හිරිහැර කරන්නන්, බිත්ති මගේ ගමනට බාධා කරනවා.",
       "මම බැට්මෑන් කියලා මම කියන්නේ නැහැ. මම කියන්නේ මමයි බැට්මෑන්වයි එකම කාමරයක ඉන්නවා කවුරුත් දැකලා නැහැ කියලා.",
       "මම ආශ්චර්යවත් කාන්තාවක් කියලා මම කියන්නේ නැහැ. මම කියන්නේ මාවයි Wonder Womanයි එකට එකම කාමරයක ඉන්නවා කවුරුත් දැකලා නැහැ කියලා.",
       "මම සුපර්මෑන් කියලා මම කියන්නේ නැහැ. මම කියන්නේ කවුරුත් මාවයි සුපර්මෑන්වයි එකම කාමරයක ඉන්නවා දැකලා නැහැ කියලා විතරයි.",
       "මම ස්පයිඩර් මෑන් කියලා මම කියන්නේ නැහැ. මම කියන්නේ මමයි ස්පයිඩර් මෑන්වයි එකම කාමරයක ඉන්නවා කවුරුත් දැකලා නැහැ කියලා.",
       "මම සුපිරි වීරයෙක් කියලා මම කියන්නේ නැහැ. මම කියන්නේ මම සහ සුපිරි වීරයෙක් එකම කාමරයක ඉන්නවා කවුරුත් දැකලා නැහැ කියලා."
];
