function performOperation() {
    let num = document.getElementById("numberInput").value;
    let operation = document.getElementById("operation").value;
    let result = "";
    
    if (isNaN(num) || num === "") {
        alert("Please enter a valid number");
        return;
    }
    
    num = parseInt(num);
    
    switch (operation) {
        case "reverse":
            result = num.toString().split('').reverse().join('');
            break;
        case "palindrome":
            let strNum = num.toString();
            result = strNum === strNum.split('').reverse().join('') ? "It's a Palindrome" : "Not a Palindrome";
            break;
        case "oddEven":
            result = num % 2 === 0 ? "Even" : "Odd";
            break;
        case "prime":
            result = isPrime(num) ? "Prime Number" : "Not a Prime Number";
            break;
    }
    
    document.getElementById("result").innerText = "Result: " + result;
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function resetForm() {
    document.getElementById("numberInput").value = "";
    document.getElementById("operation").selectedIndex = 0;
    document.getElementById("result").innerText = "Result: ";
}