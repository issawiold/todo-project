var name=prompt("kindly provide us with your name","anonymus");
var gender=prompt("kindly provide us with your gender");
if (!(gender=="male"||gender=="female")) {
    gender=prompt("kindly provide us with your gender");
};
var age=Number(prompt("kindly provide us with your age"));
if(age<=0) {
    age=Number(prompt("kindly provide us with your age") );
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

