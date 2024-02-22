
function getdata() {

    document.getElementById("CardHolderName").innerHTML = document.getElementById("name").value;
    document.getElementById("CardHolderNumber").innerHTML = document.getElementById("mob").value;
    document.getElementById("CardHolderDOB").innerHTML = document.getElementById("dob").value;
    document.getElementById("company-name").innerHTML = document.getElementById("companyname").value;
    document.getElementById("address-data").innerHTML = document.getElementById("address").value;
    document.getElementById("email-id").innerHTML = document.getElementById("email").value;
    document.getElementById("web-site").innerHTML = document.getElementById("Websitename").value;
}
function checkEmptyFiels() {
    getdata();
    console.log('hello....');
    let fname = document.getElementById("name").value;
    let comp = document.getElementById("companyname").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    // let con = document.getElementById("mob").value;
    let adr = document.getElementById("address").value;
    var website = document.getElementById("Websitename").value;

    // var img = document.getElementById("image").value;
    //check there is any empty fields or not
    if (fname === "") {
        alert("Please enter First Name");
        document.getElementById("name").focus();
    }
    else if (adr === "") {
        alert("Please enter address");
        document.getElementById("adr").focus();
    }
    else if (website === "") {
        alert("Please enter website");
        document.getElementById("adr").focus();
    }
    else if (comp === "") {
        alert("Please Enter Your Comapny Name");
        document.getElementById("companyname").focus();
    }
    else if (dob === "") {
        alert("Please Enter Date-Of-Birth");
        document.getElementById("dob").focus();
    }

    else if (email === "") {
        alert("Please Enter Email");
        document.getElementById("email").focus();

    }
    else {
        getdata();
    }


}
// function clearText() {
//     document.getElementById("CardHolderName").innerHTML = "";
//     document.getElementById("CardHolderNumber").innerHTML = "";
//     document.getElementById("company-name").innerHTML = "";
//     document.getElementById("address").innerHTML = "";
//     document.getElementById("email-id").innerHTML = "";
//     document.getElementById("web-site").innerHTML = "";
// }
