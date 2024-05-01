savePassword = () => {
    const emailText = document.getElementById()
}

login = () => {
    //index.html

}


// savePassword = () => {
//     const usname = document.getElementById("login-usname").value;
//     const email = document.getElementById("login-email").value;
//     const pass = document.getElementById("login-password").value;

//     let entries = JSON.parse(localStorage.getItem('savedEntries')) || [];

//     entries.push({usname,email, pass });

//     localStorage.setItem("savedEntries", JSON.stringify(entries));

//     // Clear input fields after saving
//     document.getElementById("login-email").value = "";
//     document.getElementById("login-passwd").value = "";
//     document.getElementById("login-usname").value=" ";
// }

savePassword = (event) => {
    const usName = document.getElementById("login-usname").value;
    const email = document.getElementById("login-email").value;
    const pass = document.getElementById("login-psswd").value; // Corrected ID

    let entries = JSON.parse(localStorage.getItem('savedEntries')) || [];
    entries.push({ usName, email, pass });

    localStorage.setItem("savedEntries", JSON.stringify(entries));
    // Clear input fields after saving
    document.getElementById("login-email").value = "";
    document.getElementById("login-psswd").value = "";
    document.getElementById("login-usname").value = "";
    // window.location.href = "cart.html";
}
login = () => {
    const email = document.getElementById("login-email").value;

    const savedEntries = JSON.parse(localStorage.getItem('savedEntries')) || [];
    const matchingEntries = savedEntries.find(
        entry => entry.email === email
    );
    if (matchingEntries) {
        window.location.href = "Practise_project.html";
    }
    else {
        alert("Either the password is incorrect or email.")
    }

    email = " ";
}