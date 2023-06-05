var name=prompt("kindly provide us with your name","anonymus");
var gender=prompt("kindly provide us with your gender");
if (!(gender==("male")||gender==("female"))) {
    gender=prompt("kindly provide us with your gender");
};
var age=prompt("kindly provide us with your age");
if (typeof(age)!="number") {
    age=prompt("kindly provide us with your age");
}
if(age<=0) {
    age=prompt("kindly provide us with your age") ;
}
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
let questions=["Have you ever sleepwalked\?","Do you like running\?","Do you know how to swim\?"]
let answers=[]
const usrInput=(arr)=>{for (let i = 0;i < arr.length;i++) {
     let answer=window.prompt(arr[i]);
    if(!(answer==("Yes") || answer==("No"))){
        answers.push("invalid")
    }
    else{
        answers.push(answer)
    }
    
    
}
return
}
const printArray=(arr)=>{for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);  
    
}}
usrInput(questions);
printArray(answers)

