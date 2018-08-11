function validateForm() {
    var checkName = document.forms["myForm"]["Name"].value;
    var Name = document.getElementById("Name");

    var checkEmail = document.forms["myForm"]["Email"].value;
    var Email = document.getElementById("Email");

    var checkGender = document.forms["myForm"]["Gender"].value;

    var checkSubject = document.forms["myForm"]["Subject"].value;
    var Subject = document.getElementById("Subject");
    
    var checkMsg = document.getElementById("taMessage").value
    var taMsg = document.getElementById("taMessage");
    if (checkName == "") {
        alert("Name must be filled out");
        Name.className="redBorder";
        return false;
    }
    if (checkEmail == ""){
        alert("Email must be filled out")
        Email.className="redBorder";
        return false;
    }
    if (checkGender == ""){
        alert("Gender must be filled out")
        return false;
    }
    if (checkSubject == ""){
        alert("Subject must be fill out")
        Subject.className="redBorder";
        return false;
    }
    if (checkMsg == ""){
        alert("Message must be fill out")
        taMsg.className="taRedBorder"
        return false;
    }
}