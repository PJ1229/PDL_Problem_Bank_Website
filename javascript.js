// alerts user with userInputs
function returnText()
{
    let input = document.getElementById("userInput").value
    alert(input);
}

// counts characters of a textarea
function countCharacters() {
    var text = document.getElementById("userInput").value;
    var count = text.length;
    document.getElementById("charCount").innerText = count + " / 1000";
}