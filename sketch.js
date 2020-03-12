let input;
let submit;

function setup(){
    noCanvas();
    //lexicon = new RiLexicon;
    input = select('#input');
    submit = createButton("Submit");
    submit.mousePressed(processText);
}
function processText(){
    let text = input.value();
    let rs = new RiString(text);

    let words = rs.words();
    let pos = rs.pos();
    // console.log(words);
    // console.log(pos);
    let output='';
    for(let i = 0; i < pos.length; i++){
        if(pos[i] == 'nn'){
            output += RiTa.randomWord('nn');
        }
        else{
            output += words[i];
        }
        output += ' ';
    }
    createP(output);

}