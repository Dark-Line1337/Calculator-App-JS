const num1 = parseFloat(prompt("Enter First Number"))
const operation = prompt("Enter Operator")
const num2 = parseFloat(prompt("Enter Second Number"))
const result = document.querySelector("#result")
const result1 = document.querySelector("#result1")

function GetSum(num1,num2)
{
    return num1 + num2;
}

function GetSub(num1,num2)
{
    return num1 - num2;
}

function GetMultiply(num1,num2)
{
    return num1 * num2;
}

function ReloadPage()
{
    location.reload();
}

switch (operation)
{
    case '+':
        result.innerHTML = GetSum(num1,num2)
        break;
    case '-':
        result.innerHTML = GetSub(num1,num2)
        break;
    case '*':
        result.innerHTML = GetMultiply(num1,num2)
        break;
    default:
        result1.innerHTML = "Invalid Operator<br>Please Try Again And Enter The Correct Operator"
}
