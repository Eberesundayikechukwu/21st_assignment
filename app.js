var weight = parseFloat(prompt("input your weight"));
var height = parseFloat(prompt("input your height"));
var statement = document.getElementById("statement");

function BmiCalc() {
    var Bmi = weight / (height * height);
    var BmiSum = Math.round(Bmi * 10) / 10;
    var output = "your bmi is " + BmiSum;

    if(BmiSum <= 18.5) {
        var result = output + " " + "you are underweight";
    }

    if(BmiSum > 18.5 && BmiSum <= 24.9) {
        var result = output + " " + "you have a normal weight";
    }

    if(BmiSum > 24.9) {
        var result = output + " " + "you are overweight";
    }

    return result;
}
BmiCalc(weight, height);

statement.innerHTML = BmiCalc();




//  NUMBER2 ASSIGNMENT

// var txt = document.getElementById("txt")
// var yourAge = 14;
// var accompanied = false;

// function permission(){
// if (yourAge < 13 || accompanied === true){
//     var output = "you are permitted to watch this movie.";
// }
// if(yourAge >13 || accompanied === false){
//     var output = "you can watch this movie"
// }
// else {
//     var output = "You are not permitted";
// }
//     return output;
// }
// txt.innerHTML = permission();