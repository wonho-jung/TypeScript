var tsbutton = document.querySelector("button");
var tsinput1 = document.getElementById("num1");
var tsinput2 = document.getElementById("num2");
// this JavaScrpt problem ex) "5" +"5" = 55. it needs some function that can check type and prevent this happening.
function typescriptadd(num1, num2) {
    return num1 + num2;
}
// this is what typescript do.
// function typescriptadd2(num1, num2) {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2;
//   } else {
//     return console.log("check your argument value type");
//   }
// }
tsbutton.addEventListener("click", function () {
    console.log(typescriptadd(Number(tsinput1.value), Number(tsinput2.value)));
});
