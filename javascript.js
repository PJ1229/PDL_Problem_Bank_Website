function returnText()
{
    let input = document.getElementById("userInput").value
}

function countCharacters() {
    var text = document.getElementById("textInput").value;
    var count = text.length;
    document.getElementById("charCount").innerText = count + " / 500";
}