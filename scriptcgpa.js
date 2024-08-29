var totalcred;
var cgpa;

function generate() {
    var sem = parseInt(document.getElementById("sem").value);
    var container = document.getElementById("semContainer");

    if (isNaN(sem) || sem > 10 || sem < 1) {
        document.getElementById("result").textContent = "Please enter a valid semester (1-10).";
        return;
    }

    container.innerHTML = "";

    for (var i = 1; i < sem; i++) { // Fixed the loop condition
        var row = document.createElement("div");
        row.className = "sem-row";

        var gpadiv = document.createElement("div");
        var gpaInput = document.createElement("input");
        gpaInput.type = "number";
        gpaInput.id = "gpa" + i;
        gpaInput.placeholder = "CGPA Sem " + i;
        gpadiv.appendChild(gpaInput);

        var creddiv = document.createElement("div");
        var credInput = document.createElement("input");
        credInput.type = "number";
        credInput.id = "cred" + i;
        credInput.placeholder = "Credits Sem " + i;
        creddiv.appendChild(credInput);

        row.appendChild(gpadiv);
        row.appendChild(creddiv);
        container.appendChild(row);
    }

    // Create and append the submit button
    var submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.className = "data-sub";
    submit.onclick = calculate; // Fixed the function call
    container.appendChild(submit);

    document.getElementById("result").textContent = ""; // Clear previous result message
}

function calculate() {
    var sem = parseInt(document.getElementById("sem").value);
    var totalcred = 0;
    var cgpa1 = 0;

    for (var i = 1; i < sem; i++) { // Fixed the loop condition
        var gpa1 = parseFloat(document.getElementById("gpa" + i).value);
        var credits = parseFloat(document.getElementById("cred" + i).value);
        if (!isNaN(gpa1) && !isNaN(credits)) {
            totalcred += credits;
            cgpa1 += (gpa1 * credits);
        }
    }

    if (totalcred > 0) {
        cgpa = cgpa1 / totalcred;
        document.getElementById("result").textContent = "Your Current CGPA is - " + cgpa.toFixed(2);
    } else {
        document.getElementById("result").textContent = "Please enter valid GPA and Credits.";
    }
}
