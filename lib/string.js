module.exports = class frettedString {

    
    constructor(rootNote='C',accidentalType='sharp',fretCount=12){
        this.rootNote = rootNote;
        this.fretCount= fretCount;
        this.accidentalType = accidentalType;
        this.initNotes();
    }
    initNotes(){
        
        const accidentals = {
           flat: ['Ab','A','Bb','B','C','Db','D','Eb','E','F','Gb','G'],
           sharp: ['A','A#','B','C',"C#",'D',"D#",'E','F','F#','G',"G#"]
        };
        let OutputArray = [];
        let accidental = accidentals[this.accidentalType];
        let i = accidental.indexOf(this.rootNote);
        let length = i+this.fretCount;
        for( i=i; i <=length ; i++){
            let val = accidental[i%12];
            val = this.padEnd(val,2);
            OutputArray.push(val);
        }
        
        this.fretNames=OutputArray;
        
    }
    padEnd(input, finalLength,padStr=" "){
        //console.log(input);
        let initialLength = input.length;
        if (initialLength < finalLength){
            let repeatCount= Math.floor((finalLength-initialLength)/padStr.length);
            let output = input;
            
            if(repeatCount > 0){
                output = output + padStr.repeat(repeatCount);
            }
            return output
        }
        return input;
    }
    getNote (fretNumber){
        return this.fretNames[fretNumber];
    };

};