var sideMenu = document.querySelector("#sideMenu");

function openMenu() {
    sideMenu.style.right = 0;
}

function closeMenu() {
    sideMenu.style.right = "-50rem";
}

// code sample

function openCodeSample(name) {
    var picCode = document.querySelector(".pic-code"+name+"-clone");
    var backgroundBlue = document.querySelector(".blur-clone");

    picCode.classList.add("clone-open");
    backgroundBlue.classList.add("clone-open");
}

function closeCodeSample(name) {
    var picCode = document.querySelector(".pic-code"+name+"-clone");
    var backgroundBlue = document.querySelector(".blur-clone");

    picCode.classList.remove("clone-open");
    backgroundBlue.classList.remove("clone-open");
}

