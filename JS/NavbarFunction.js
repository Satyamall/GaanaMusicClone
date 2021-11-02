
import navbar from "./navbar.js";

const nav = navbar()
const container = document.getElementById("navbar_container")

container.innerHTML = nav;
// toggle for language 
var btn = document.getElementById("text");
btn.addEventListener("click", showData);

function showData() {
    document.getElementById("dropDown").classList.toggle("show");
}
var lan = document.getElementById("text-lan");
lan.addEventListener("click", showLanguage);

function showLanguage() {
    document.getElementById("dropDown-lan").classList.toggle("show");
}

var profile = document.getElementById("profileImg");
profile.addEventListener("click", detailsProfile);

function detailsProfile() {
    document.getElementById("profileData").classList.toggle("view");
}

// open and close for side bar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("navbar").style.marginLeft = "250px";
    document.getElementById("mytopnav").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("navbar").style.marginLeft = "0";
    document.getElementById("mytopnav").style.marginLeft = "0";
}
window.addEventListener("load",()=>{
    var openbtn = document.getElementById("opensidebar");
    openbtn.addEventListener("click",openNav)
    
    var closebtn = document.getElementById("closesidebar");
    closebtn.addEventListener("click",closeNav)
})


// * Toggle for night mode
var toggle = document.getElementById("toggle");
toggle.addEventListener("click", color);
var toggle1 = document.getElementById("toggle1");
toggle1.addEventListener("click", colorchange);

function color() {
    document.body.classList.toggle("bgcolor");
    document.getElementById("navbar").style.backgroundColor = "rgb(27, 27, 27)";
    document.getElementById("mytopnav").style.backgroundColor = "rgb(27, 27, 27)";
    document.getElementById("mytopnav").style.color = "white";
    toggle.style.display = "none";
    toggle1.style.display = "block";
}

function colorchange() {
    toggle1.style.display = "none";
    toggle.style.display = "block";
    document.body.classList.toggle("bgcolor1");
    document.getElementById("navbar").style.backgroundColor = "rgb(245, 245, 245)";
    document.getElementById("mytopnav").style.backgroundColor = "white";
    document.getElementById("mytopnav").style.color = "rgb(0, 0, 0, .75)";
}

var toggleNightmode = document.getElementById("toggle-nightmode");
toggleNightmode.addEventListener("click", colorNight);

function colorNight() {
    document.body.classList.toggle("bgcolor");
    document.getElementById("navbar").style.backgroundColor = "rgb(27, 27, 27)"
    document.getElementById("profileData").style.backgroundColor = "rgb(27, 27, 27)"
    document.getElementById("profileData").style.color = "white";
    toggle.style.display = "none";
    toggle1.style.display = "block";
}

// * closing of login and signup page on click in window
var modal = document.getElementById('login');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modal1 = document.getElementById('signup');
window.onclick = function (event) {
    if (event.target == modal1) {
        modal.style.display = "none";
    }
}


//* Login and Sign Function Code
var userData = [];

function addData() {
    // e.preventDefault();
    console.log("satya");
    var name = document.getElementById('name').value;
    var contact_no = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (!name || !contact_no || !email || !password) {
        alert("Mendetary to fill all boxes");
        return;
    }
    const userDetail = {
        userName: name,
        userContact: contact_no,
        userEmail: email,
        userPassword: password,
    }

    for (let j = 0; j < userData.length; j++) {
        if (userData[j].userEmail === userDetail.userEmail) {
            alert("Email is already signup");
            return;
        }

    }
    var div = document.getElementById("userName");
    div.innerHTML = "";
    var p = document.createElement("p");
    p.textContent = `Hello, ${name}`;
    div.append(p);
    userData.push(userDetail);
    localStorage.setItem("usersData", JSON.stringify(userData));
    document.getElementById("user").style.display = "none";
    document.getElementById("profile").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "none";
    document.getElementById("subscription").style.display = "none";
    document.getElementById("after-login").style.display = "block";
}

function usersDataLoad() {
    const data = JSON.parse(localStorage.getItem("usersData"));
    if (data) {
        userData = data;
        //addData(data);
        loginData(data);
    }
}

window.addEventListener("load", function () {
    var btn = document.getElementById('sign');
    btn.addEventListener("click", addData);

    usersDataLoad();

    var loginBtn = document.getElementById('submit');
    loginBtn.addEventListener("click", loginData);
})

function loginData(data) {
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;
    // if (!loginEmail || !loginPassword) {
    //     alert("Fill the details thenlogin");
    //     return;
    // }
    var uemail = "";
    var upassword = "";
    var username;
    for (var i = 0; i < data.length; i++) {
        if (loginEmail === data[i].userEmail) {
            uemail += loginEmail;
            username = data[i].userName;
        }
        if (loginPassword === data[i].userPassword) {
            upassword += loginPassword;
        }
    }
    if (uemail || upassword) {
        alert("invalid Credentials");
        return;
    }
    else {
        document.getElementById("user").style.display = "none";
        document.getElementById("profile").style.display = "block";
        document.getElementById("login").style.display = "none";
        document.getElementById("signup").style.display = "none";
        document.getElementById("subscription").style.display = "none";
        document.getElementById("after-login").style.display = "block";
        var div = document.getElementById("userName");
        div.innerHTML = "";
        var p = document.createElement("p");
        p.textContent = `Hello, ${username}`;
        div.append(p);
    }
}

// * Log Out account function
var logout = document.getElementById("logOut");
logout.addEventListener("click", afterLogout);

function afterLogout() {
    document.getElementById("user").style.display = "block";
    document.getElementById("profile").style.display = "none";
    document.getElementById("subscription").style.display = "block";
    document.getElementById("after-login").style.display = "none";
}