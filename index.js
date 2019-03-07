let FrettedString= require('./lib/string.js');
const defaultStrings= ['E','B','G','D','A','E'];
const accidentals="flat";
const frets = 15;
let fretboard=[null,];
//creating array of objects
for(let i=0;i<defaultStrings.length;i++){
    fretboard.push(new FrettedString(defaultStrings[i],accidentals,frets));
}

// print out fretboard for debugging
for(let i=1; i<fretboard.length;i++){
    let stringdebug= fretboard[i];
    console.log(stringdebug.fretNames.join(' | '));
}

function selectElement(){
    //select string
    let fretNumber =Math.floor(Math.random()* frets );
    let stringNumber= Math.floor(Math.random()* (fretboard.length-1))+1
    return {
     stringNumber,
     fretNumber,
     "selectedNote": fretboard[stringNumber].getNote(fretNumber)
    }

}

function deleteOne (hash) {
    let keys = Object.keys(hash);
    
    let selectedKey = keys[ Math.floor(Math.random() * (keys.length-1))]
    delete hash[selectedKey];
    return hash;
};

let foo = [];

for(i=0; i< 20; i++){
    foo[i]= deleteOne(selectElement());
}
console.log(foo);
//console.log(selectElement());
//console.log(selectElement());
//console.log(selectElement());

