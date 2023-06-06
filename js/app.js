var name=prompt("kindly provide us with your name","anonymus");
var gender=prompt("kindly provide us with your gender");

if (!(gender==("male")||gender==("female"))) {
    gender=prompt("kindly provide us with your gender");
};
var age=prompt("kindly provide us with your age");

var bol=!confirm("would you like us to skip the welcoming message");
if (bol) {
    if (gender=="male") {alert("welcome Mr."+name);
        
    }
    else if (gender=="female") {alert("welcome Ms."+name);
}
    else{
        alert("welcome Ms."+name);
    }
}

const usrInput=()=>{
    let questions=["Have you ever sleepwalked\?","Do you like running\?","Do you know how to swim\?"]
    let answers=[]
    for (let i = 0;i < questions.length;i++) {
    let answer=window.prompt(questions[i]);
    answers.push(answer)
    }
return answers
}
const checkIfYesOrNo=(arr)=>{
    let    newAnswers=[]
    let    answer=[]
    for (let i = 0; i < arr.length; i++) {
        answer=arr[i];
        if(!(answer==("Yes") || answer==("No"))){
            newAnswers.push("invalid")
        }
        else{
            newAnswers.push(answer)
        }
        
    }

    return newAnswers
    
}
const printArray=(arr)=>{for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);  
    
}}

let promptandStore=usrInput();
let checkIfYesOrNo1=checkIfYesOrNo(promptandStore)
printArray(checkIfYesOrNo1)

