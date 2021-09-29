// menu fitur bot
const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { 
	return `
	
 *اللائحة ${name}*
 
┴
┣⊱ *USER NAME* : *${pushname2}*
┣⊱ *VERIVICATION:*  ✅
┣⊱ *REGISTERED USERS* : *${user.length} User*
┬


 *معلومات ${name}*
 
 
┴
│➻ *${prefix}speed* | سرعة البوت
│➻ *${prefix}daftar* | للتاكد من تسجيل رقمك
│➻ *${prefix}blocklist* | قائمة البلاك لست
│➻ *${prefix}banlist* | قائمة المحظورين
│➻ *${prefix}premiumlist* | قائمة البريميوم
│➻ *${prefix}bahasa* | اللغات المدعومة
┬


 *اوامر التحميل* 
 
 
┴
│➻ *${prefix}instagram* | انستقرام
│➻ *${prefix}instavid*| فيديو انستقرام
│➻ *${prefix}instaimg* | صورة انستقرام
│➻ *${prefix}instastory* | ستوري انستقرام
│➻ *${prefix}ytmp3* | تحميل صوتي من اليوتيوب
│➻ *${prefix}ytmp4* | تحميل الفيديو من اليوتيب
│➻ *${prefix}tiktok* | تحميل من التكتوك
┬


 *اوامر الكتابة لى الصور* 
 
 
┴
│➻ *${prefix}nulis* | كتابة اسمك على ورقة
│➻ *${prefix}tahta* | اسمك
│➻ *${prefix}bpink* | اسمك
│➻ *${prefix}3d* | اسمك
│➻ *${prefix}tlight* | اسمك
│➻ *${prefix}goldbutton* | اسمك
│➻ *${prefix}silverbutton* | اسمك
│➻ *${prefix}leavest* | اسمك
│➻ *${prefix}phlogo Anjay/tes*
│➻ *${prefix}tts id Haii*
│➻ *${prefix}cpaper* | اسمك
├───────────────────
│
│   *اوامر صنع الملصقات* 
│
│➻ *${prefix}stiker* | لصناعة ملصق
│➻ *${prefix}gifstiker* | لصناعة ملصق متحرك
│➻ *${prefix}toimg* | تحويل الملصق الى صورة
│➻ *${prefix}img2url* | صناعة ملصق من رابط صورة
│➻ *${prefix}tomp3* | تحويل الفيديو الى صوت
┬



┴

 *فقط للقروبات* 
 
 
┴
│➻ *${prefix}antilink On/Off* | لمنع الروابط
│➻ *${prefix}welcome On/Off* | لتفعيل الترحيب بالاعضاء
│➻ *${prefix}grup فتح/اغلاق* | فتح و اغلاق المحادثة في المجموعة
│➻ *${prefix}ownergrup* | اظهار رقم صاحب القروب
│➻ *${prefix}infogc* | اظهار معلومات المجموعة
│➻ *${prefix}add 628xxxxxxxxxx* | اضافة عضو
│➻ *${prefix}kick @mentioned* | طرد عضو
│➻ *${prefix}promote @mentioned* | اعطاء رتبة ادمن
│➻ *${prefix}demote @mentioned* | لسحب رتبة ادمن
│➻ *${prefix}setname* | تغيير اسم المجموعة
│➻ *${prefix}setdesc* | لتغيير الوصف
│➻ *${prefix}linkgrup* | رابط المجموعة
│➻ *${prefix}tagme* | تاق 
│➻ *${prefix}hidetag* | رسالة فارغة
│➻ *${prefix}tagall* | تاق للجميع
│➻ *${prefix}mentionall* | منشن للجميع
│➻ *${prefix}fitnah @mentioned/isi/balasan*
│➻ *${prefix}listadmin*
┬


 *فقط للادمن*
 
 
┴
│➻ *${prefix}nsfw On/Off*
│➻ *${prefix}nsfwloli*
│➻ *${prefix}nsfwblowjob*
│➻ *${prefix}nsfwneko*
│➻ *${prefix}nsfwtrap*
│➻ *${prefix}hentai*
│➻ *${prefix}simih On/Off*
│➻ *${prefix}bott on/off*
┬


 *فقط للاونر* 
 
 
┴
│➻ *${prefix}addprem mentioned* | اعطاء خاصية البريميوم
│➻ *${prefix}removeprem mention* | ازالت البريميوم
│➻ *${prefix}setprefix* | تغيير البرفكس
│➻ *${prefix}setnamebot* | تغيير اسم البوت
│➻ *${prefix}setppbot*
│➻ *${prefix}bc* | رسالة جماعية
│➻ *${prefix}bcgc* | رسالة جماعية من قروب
│➻ *${prefix}ban* | حظر شخص من البوت
│➻ *${prefix}unban* | فك الحظر
│➻ *${prefix}block* | بلوك
│➻ *${prefix}unblock* | الغاء البلوك
│➻ *${prefix}leave* | مغادرة المجموعة
┬


 *فقط لمشتركين البريميوم* 


┴
│➻ *${prefix}fb link video*
│➻ *${prefix}snack link snack video*
│➻ *${prefix}ytmp3 link yt*
│➻ *${prefix}ytmp4 link yt*
│➻ *${prefix}joox Monolog Pamungkas*
│➻ *${prefix}smule Link Video Smule*
┬


➻Made by XD1 Team
`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

// donasi menu
const donasi = (name) => { 
	return `       
╭─────「 *DONASI SEIKHLASNYA* 」
┴
│√ *PULSA : 081368646011*
│√ *GOPAY : 081368646011*
│
│\`\`\`Gopay\`\`\`
│ *15k Invite Bot Ke Grup selama 1 bulan*
│
│\`\`\`Pulsa\`\`\`
│ *20k Invite Bot Ke Group Selama 1 Bulan*
┬
╰──────「 *BY ${name}* 」

Untuk Kelangsungan Hidup Bot Karna Kuota Mahal:'
`
}
exports.donasi = donasi

// bahasa list
const bahasa = (prefix) => {
return `
قائمة اللغات للقيادة *${prefix}tts*

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`*آسف ${pushname2} انتهى الحد الخاص بك اليوم\n\n من فضلك عد غدا:)\n\n إعادة تعيين الحد عند المالك Gabut:v*`
}

const limitcount = (limitCounts) => {
        return`
حدودك: ${limitCounts}
`
}

exports.limitend = limitend
exports.limitcount = limitcount