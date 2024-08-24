let motQuotes = {
    0: "Word hard",
    1: "Be good",
    2: "Rest not till the goal is achieved"
};

function messagePicker(arr){
    return(arr[Math.floor(Math.random()*3)]);
};

console.log(messagePicker(motQuotes));