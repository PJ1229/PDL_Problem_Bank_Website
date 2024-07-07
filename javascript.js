// counts characters of a textarea
function countCharacters() {
    var text = document.getElementById("userInput").value;
    var count = text.length;
    document.getElementById("charCount").innerText = count + " / 1000";
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    fetch('https://script.google.com/macros/s/AKfycbz1Al8hrCvP6o9XCY1Ih-Q8kLUrIvuNpDxA4_k_ZXrqUgQgW96mm--xfkSdjJv_HGvO/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Check for a specific condition to determine success or failure
        // Assuming a successful submission redirects
        window.location.href = "https://pj1229.github.io/PDL_Problem_Bank_Website/";
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Submission failed. Please try again.');
    });
}