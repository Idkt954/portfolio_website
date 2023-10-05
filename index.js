// About me menu onclick
function openTap(tabName) {
    var tabLinks = document.querySelectorAll(".tab-links");
    var tabContents = document.querySelectorAll(".tab-contents");

    for (var i = 0;i<tabLinks.length;i++) {
        tabLinks[i].classList.remove("active-link");
    }
    for (var i = 0;i<tabContents.length;i++) {
        tabContents[i].classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.querySelector("#" + tabName).classList.add("active-tab");
}

function toProjectPage(projectName) {
    if (projectName == "smartCar") {
        window.location.href = "./public/robotCar.html";
    }
    else if (projectName == "smartFarm") {
        window.location.href = "./public/smartFarm.html";
    }
    else if (projectName == "I-dia") {
        window.location.href = "./public/Idia.html";
    }
}

function toSocialMedia(name) {
    if (name == "fb") {
        window.location.href = "https://www.facebook.com/profile.php?id=100005053454564";
    }
    else if (name == "ig") {
        window.location.href = "https://www.instagram.com/t_tatsw/";
    }
}

// SIDE MENU
var sideMenu = document.querySelector("#sideMenu");

function openMenu() {
    sideMenu.style.right = 0;
}

function closeMenu() {
    sideMenu.style.right = "-50rem";
}