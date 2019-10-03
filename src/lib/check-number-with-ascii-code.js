export function checkNumberWithAsciiCode (value){
    if(value < 48 || value > 57){
        console.log("number");
        return true;
     } else {
        console.log("not a number");
        return false;
     }
}