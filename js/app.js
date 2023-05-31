var name=prompt("kindly provide us with your name","anonymus");
var gender=prompt("kindly provide us with your gender");
if (gender!=("male"||"female")) {
    gender=prompt("kindly provide us with your gender");
};
var age=prompt("kindly provide us with your age");
if (this.age!="number") {
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

