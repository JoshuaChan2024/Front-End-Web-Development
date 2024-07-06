function validateFeedback() {
    //clear error messages in the span element
    if(document.getElementById("errfName").innerHTML != ""){
    document.getElementById("errfName").innerHTML = "";
    }
    if(document.getElementById("errlName").innerHTML != ""){
    document.getElementById("errlName").innerHTML = "";
    }
   if(document.getElementById("errEmail").innerHTML != ""){
    document.getElementById("errEmail").innerHTML = "";
    }
    if(document.getElementById("errMobile").innerHTML != ""){
    document.getElementById("errMobile").innerHTML = "";
    }
    if(document.getElementById("errGender").innerHTML != ""){
    document.getElementById("errGender").innerHTML = "";
    }
    if(document.getElementById("errArea").innerHTML != ""){
    document.getElementById("errArea").innerHTML = ""; 
    }
    
    //store textbox value into variable
    // first name
    var fname = document.feedbackForm.txtfName;
   var newfname = fname.value;
   var fname0 = newfname.charAt(0); // New addition
   var fname1 = newfname.charAt(1); // New addition
    // last name
    var lname = document.feedbackForm.txtlName;
    //Email
    //store the index value of @ and .
    var emailID = document.feedbackForm.txtEmail;
    atpos = emailID.value.indexOf("@");
    dotpos = emailID.value.lastIndexOf(".");
   //store mobile number into variable
    var mobileN = document.feedbackForm.txtMobile;
    var mobileExpress = /^\(?[8-9]{1}\)?([0-9]{7})$/; //mobile number must starts with 8/9 and total digits must be 8. Letters not allowed
   //store the value of checkbox and radio buttons. True/False
    var maleChk = document.getElementById("rbMale").checked;
    var femaleChk = document.getElementById("rbFemale").checked;
    var areaChk = document.getElementById("txtArea").value;
    //check if first name is empty
    if(fname0 == "" && fname1 == ""){
        document.getElementById("errfName").innerHTML = "<br>Please enter your first name, with minimum of 2 characters!";
        fname.style.backgroundColor = "pink"; // change to pink colour
        fname.focus();
        return false;
        }
        // change back to light colour
        // if(fname.value !="" && fname0 !=""){
        if((fname0 !="") && (fname1 !="")){
        fname.style.backgroundColor = "#e8f0fe"; // change colour
       // errfName.innerHTML="";
        document.getElementById("errfName").style.display = "none";
        }
       // check if last name is empty
        if (lname.value == ""){
        document.getElementById("errlName").innerHTML = "<br>Please enter your last  name, with minimum of 2 characters!";
        lname.style.backgroundColor = "pink"; // change to pink colour
        lname.focus();
        return false;
        }
       // change back to light colour
        if(lname.value !=""){
        lname.style.backgroundColor = "#e8f0fe"; 
        errlName.innerHTML="";
        }
       // check if email is valid/empty
        if (emailID.value == "" || atpos < 1 || (dotpos - atpos < 2)) {
        document.getElementById("errEmail").innerHTML = "<br>Empty / Incorrect email address!";
        emailID.style.backgroundColor = "pink"; // change to pink colour
        emailID.focus();
        return false;
        }
       // change back to light colour
        if(emailID.value !="" || !(atpos < 1) || !(dotpos - atpos < 2)){
        emailID.style.backgroundColor = "#e8f0fe"; 
        errEmail.innerHTML="";
        }
        //check if mobile number is empty or valid
        if (mobileN.value == "" || !mobileN.value.match(mobileExpress)){
        document.getElementById("errMobile").innerHTML = "<br>Empty / Invalid mobile number!";
        mobileN.style.backgroundColor = "pink"; // change to pink colour
        mobileN.focus();
        return false;
        }
        // change back to light colour
        if(mobileN.value !="" || mobileN.value.match(mobileExpress)){
        mobileN.style.backgroundColor = "#e8f0fe"; 
        errMobile.innerHTML="";
        }
        // check if gender is selected or not selected
        if (maleChk == false && femaleChk == false){
        document.getElementById("errGender").innerHTML = "<br>Please select your gender!";
        return false;
        }
        // check if comment box is filled
        if (areaChk == ""){
        document.getElementById("errArea").innerHTML = "Please enter your comments!";
        return false;
        }
        return true; // return a true value if all input fields are filled correctly
        }
       