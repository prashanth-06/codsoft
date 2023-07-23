function ac() {
    document.getElementById("res").value = "";
}

function de() {
    document.getElementById("res").value = document.getElementById('res').value.slice(0, -1);
}

function show(input) {
    if (input === "=") {
        let value1 = eval(document.getElementById("res").value);
        document.getElementById("res").value = value1;
    } else {
        document.getElementById("res").value += input;
    }
}