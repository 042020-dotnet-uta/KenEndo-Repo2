//console.log("hello");
function randomNum():number{
    return Math.floor(Math.random()*3);
}
function assignChoiceWord(p1:Player):Player{
if(p1.Choice == 0){
    p1.ChoiceWord = "Rock"
}
if(p1.Choice == 1){
    p1.ChoiceWord = "Scissor"
}
if(p1.Choice == 2){
    p1.ChoiceWord = "Paper"
}
return p1;
}

function decideWinner(p1:Player,p2:Player):string{
    if(p1.ChoiceWord==p2.ChoiceWord){
        return "its a tie!";
    }

    switch(p1.ChoiceWord){
        //check if its a tie

        case "Rock": if(p2.ChoiceWord=="Scissor"){
            return `${p1.Name} beats ${p2.Name}`
        };
        break;
        case "Scissor": if(p2.ChoiceWord=="Paper"){
            return `${p1.Name} beats ${p2.Name}`
        };
        break;
        case "Paper": if(p2.ChoiceWord=="Rock"){
            return `${p1.Name} beats ${p2.Name}`
        };
        break;
    }
    return `${p2.Name} beats ${p1.Name}`;
}

interface Player{
    Name:string;
    Choice:number;
    ChoiceWord: string;
}
let p1:Player ={
    Name:"Ken",
    Choice:0,
    ChoiceWord: ""
} 
let p2:Player ={
    Name:"Mark",
    Choice:0,
    ChoiceWord: ""
} 
p1.Choice = randomNum();
p2.Choice = randomNum();

p1 = assignChoiceWord(p1);
p2 = assignChoiceWord(p2);
console.log(decideWinner(p1,p2))