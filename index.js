let FrettedString= require('./lib/string.js');
const defaultStrings= ['E','B','G','D','A','E'];
const accidentals="flat";
const frets = 15;
let fretboard=[];
for(let i=0;i<defaultStrings.length;i++){
    fretboard.push(new FrettedString(defaultStrings[i],accidentals,frets));
}

for(let i=0; i<fretboard.length;i++){
    let stringdebug= fretboard[i];
    console.log(stringdebug.fretNames.join(' | '));
}
