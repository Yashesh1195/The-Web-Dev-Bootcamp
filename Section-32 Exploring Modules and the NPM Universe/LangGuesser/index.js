const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
const input = process.argv[2];

// const langCode = franc('Alle menslike wesens word vry') //=> 'afr'
// const langCode = franc('Alle menneske er fødde til fridom') //=> 'nno'

const langCode = franc(input)

if(langCode === 'und') {
    console.log("SORRY COULDN't FIGURE OUT! TRY WITH MORE SAMPLE TEXT!".red);
}
else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is: ${language.name}`.blue);
}