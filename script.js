//Warning html elements
const warning = document.getElementById("warning");
const warningText = document.getElementById("warning-text");

document.getElementById("arrow").addEventListener("click", function() {
    console.log("clicked");

    // Get the email value inside input
    const email = document.getElementById("email-input").value;

    // Checks if the email contains the "@" symbol
    if (email.includes("@")) {
        //Doesn't change the value if contains @
        warningText.style.display = "none";
        warning.style.display = "none";
    } else {
        // Shows warning if @ doesn't exist
        warningText.style.display = "flex";
        warningText.style.bottom = "20px";
        warning.style.display = "flex"
    }
});
