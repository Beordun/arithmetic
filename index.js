const num1 = parseFloat(prompt("Enter 1st number:"));
const opr = prompt("Choose your operator: [+, -, *, /,]");
const num2 = parseFloat(prompt("Enter 2nd number:"));


 var ans = num1 + num2
 var ans = num1 - num2
 var ans = num1 * num2
 var ans = num1 / num2

    //conditions
if (opr == '+') {
    ans = num1 + num2;
    window.alert(ans);

    }else if (opr == '-') {
        ans = num1 - num2;
        window.alert(ans);
    }
    else if (opr == '*') {
    ans = num1 * num2;
    window.alert(ans);
}

    else if (opr == '/') {
    ans = num1 / num2;
    window.alert(ans);
}


//window.alert(ans);
