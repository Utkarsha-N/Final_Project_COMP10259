function validate() {
    
    // getting values from form and storing it in variables
    var fName = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var phone = document.getElementById("phone").value;
    var msg = document.getElementById("message").value;

    // applying validation
    // checking whether first name is atleast five characters
    if (fname.length < 5) {
        alert("There should be minimum 5 characters in First Name");
        return false;
    }

    // checking whether last name is atleast five characters
    if (lname.length < 5) {
        alert("There should be minimum 5 characters in Last Name");
        return false;
    }

    // checking whether email contains @
    if (!email.includes("@")) {
        alert("There is no @ in domain in Email Address");
        return false;
    }

    // Checking date format
    var pat = /^\d{4}\-\d{2}\-\d{2}$/;
    if (!date.match(pat)) {
        alert("Date Format must be in yyyy/mm/dd format.");
        return false;
    }

    // checking for 10 digits in phone number
    if (phone.length !== 10) {
        alert("Phone must contain 10 digits.");
        return false;
    }

    // checking for 50 characters of textbox
    if (msg.length < 50) {
        alert("There should be at least 50 characters in message box.");
        return false;
    }

    return true;
}

function mail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rajputaryan27802@gmail.com",
        Password : "219A286AF38756BEBDA6A82B348EBD13B863",
        To : document.getElementById("email").value,
        From : 'rajputaryan27802@gmail.com',
        Subject : "Autotriggered Mail",
        Body : "This is a part of my assignment"
    }).then(
      message => alert(message)
     
    );
}

function validateAndSend() { 
    
    if (validate()) {
        mail();
        return true; 
    } else {
        return false; 
    }
}