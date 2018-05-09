function validate(thisform) {
    var q1 = document.getElementById("Q1");
    var q2 = document.getElementById("Q2");
    q1.style.backgroundColor = "white";
    q2.style.backgroundColor = "white";
    var nameField = document.forms["myForm"]["UserInfo"];
    if (nameField.value == null || nameField.value == "") {
        alert("Enter your name!");
        nameField.focus();
        return false;
    }

    
    var q1Field = document.forms["myForm"]["Q1a"];
    if (q1Field.value == null || q1Field.value == "") {
        alert("Q1 not answered!");
        q1.style.backgroundColor = "yellow";
        return false;
    }

    var selectNum = 0;
    
    var q2aField = document.forms["myForm"]["Q2a"];
    var q2bField = document.forms["myForm"]["Q2b"];
    var q2cField = document.forms["myForm"]["Q2c"];
    var q2dField = document.forms["myForm"]["Q2d"];
    if (q2aField.value == "on") {
        selectNum++;
    }
    if (q2bField.value == "on") {
        selectNum++;
    }
    if (q2cField.value == "on") {
        selectNum++;
    }
    if (q2dField.value == "on") {
        selectNum++;
    }

    if (selectNum != 2) {
        alert("Q2 should have and only have 2 selections!");
        q2.style.backgroundColor = "yellow";
        return false;
    }

}