function toggleHide(){
    // let btn = document.getElementById('btn');
    let para = document.getElementById('para');
    if(para.style.display != 'none'){
        para.style.display = 'none';
    }
    else{
        para.style.display = 'block';
    }
}
// function clickhere(){
//     let span = document.getElementById(span);
// }
//  let timeout = setTimeout( toggleHide, 9000);
//  console.log(timeout);
// function displayTime(){
//    let time = new Date();
//     console.log(time);
//     document.getElementById('time').innerHTML = time;
// }
// setInterval(displayTime, 1000);

let newDate = new Date(2045, 10, 9, 20 , 38, 9);
console.log(newDate);
dt = newDate.getFullYear();
console.log("the year is", dt);
newDate.setMonth(5);
console.log(newDate);
newDate.setUTCFullYear(3030);{
    console.log(newDate);
}
// let dt = new Data(1)
// console.log(dt);
greet = ()=>{
 console.log("waiting for kanda")
}
greet();
// function shortcut
let sum = (a , b) => a + b;

let object1={
    names : ["rita", "sita", "harita", "gimita"],
    greeting: "hellow",
    Intro(){
        this.names.forEach((student)=>
        {
            console.log(this.greeting + " babes "  + student);
        }
        )
    }
}
object1.Intro();


