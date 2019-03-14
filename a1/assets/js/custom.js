var zIndex = 2;
window.addEvent('domready', function () {
    $$('.button').each(function (el) {
        var drag = new Drag.Move(el, {
            grid: false,
            preventDefault: true,
            onStart: function () {
                el.setStyle('z-index', zIndex++); //increment!
            }
        });
    });
});

function resetStack() {
    window.zIndex = 2;
    console.log("Reset stack")
}

function facebook() {
    resetStack();

    var element = document.getElementById("screen");
    element.classList.add("splash__facebook");

    document.getElementsByClassName("button__facebook")[0].style.zIndex = "1";
    document.getElementsByClassName("button__facebook")[0].style.left = "150px";
    document.getElementsByClassName("button__facebook")[0].style.top = "300px";

    document.getElementsByClassName("button__snapchat")[0].style.zIndex = "1";
    document.getElementsByClassName("button__snapchat")[0].style.left = "150px";
    document.getElementsByClassName("button__snapchat")[0].style.top = "310px";

    document.getElementsByClassName("button__reddit")[0].style.zIndex = "1";
    document.getElementsByClassName("button__reddit")[0].style.left = "150px";
    document.getElementsByClassName("button__reddit")[0].style.top = "320px";

    document.getElementsByClassName("button__spotify")[0].style.zIndex = "1";
    document.getElementsByClassName("button__spotify")[0].style.left = "150px";
    document.getElementsByClassName("button__spotify")[0].style.top = "330px";

    document.getElementsByClassName("button__instagram")[0].style.zIndex = "1";
    document.getElementsByClassName("button__instagram")[0].style.left = "150px";
    document.getElementsByClassName("button__instagram")[0].style.top = "340px";

    document.getElementsByClassName("button__youtube")[0].style.zIndex = "1";
    document.getElementsByClassName("button__youtube")[0].style.left = "150px";
    document.getElementsByClassName("button__youtube")[0].style.top = "350px";

    // Hide all apps that would otherwise be shown on the splash screens.
    var apps = document.getElementsByClassName('apps')[0];
    apps.classList.add('displaynone');

    // Add the splash screen.
    var element = document.getElementById("screen");
    element.classList.add("splash__facebook");

    // Wait 2 seconds before removing the css classes again.
    setTimeout(function () {
        element.classList.remove("splash__facebook");
        apps.classList.remove('displaynone');
    },
        3000);
}

function snapchat() {
    resetStack();

    var element = document.getElementById("screen");
    element.classList.add("splash__snapchat");

    document.getElementsByClassName("button__snapchat")[0].style.zIndex = "1";
    document.getElementsByClassName("button__snapchat")[0].style.left = "150px";
    document.getElementsByClassName("button__snapchat")[0].style.top = "300px";

    document.getElementsByClassName("button__instagram")[0].style.zIndex = "2";
    document.getElementsByClassName("button__instagram")[0].style.left = "150px";
    document.getElementsByClassName("button__instagram")[0].style.top = "310px";

    document.getElementsByClassName("button__facebook")[0].style.zIndex = "3";
    document.getElementsByClassName("button__facebook")[0].style.left = "150px";
    document.getElementsByClassName("button__facebook")[0].style.top = "320px";

    document.getElementsByClassName("button__reddit")[0].style.zIndex = "4";
    document.getElementsByClassName("button__reddit")[0].style.left = "150px";
    document.getElementsByClassName("button__reddit")[0].style.top = "330px";

    document.getElementsByClassName("button__spotify")[0].style.zIndex = "5";
    document.getElementsByClassName("button__spotify")[0].style.left = "150px";
    document.getElementsByClassName("button__spotify")[0].style.top = "340px";

    document.getElementsByClassName("button__youtube")[0].style.zIndex = "6";
    document.getElementsByClassName("button__youtube")[0].style.left = "150px";
    document.getElementsByClassName("button__youtube")[0].style.top = "350px";

    // Hide all apps that would otherwise be shown on the splash screens.
    var apps = document.getElementsByClassName('apps')[0];
    apps.classList.add('displaynone');

    // Add the splash screen.
    var element = document.getElementById("screen");
    element.classList.add("splash__snapchat");

    // Wait 2 seconds before removing the css classes again.
    setTimeout(function () {
        element.classList.remove("splash__snapchat");
        apps.classList.remove('displaynone');
    },
        3000);
}

function reddit() {
    resetStack();

    var element = document.getElementById("screen");
    element.classList.add("splash__reddit");

    document.getElementsByClassName("button__reddit")[0].style.zIndex = "1";
    document.getElementsByClassName("button__reddit")[0].style.left = "150px";
    document.getElementsByClassName("button__reddit")[0].style.top = "300px";

    document.getElementsByClassName("button__facebook")[0].style.zIndex = "2";
    document.getElementsByClassName("button__facebook")[0].style.left = "150px";
    document.getElementsByClassName("button__facebook")[0].style.top = "310px";

    document.getElementsByClassName("button__spotify")[0].style.zIndex = "3";
    document.getElementsByClassName("button__spotify")[0].style.left = "150px";
    document.getElementsByClassName("button__spotify")[0].style.top = "320px";

    document.getElementsByClassName("button__instagram")[0].style.zIndex = "4";
    document.getElementsByClassName("button__instagram")[0].style.left = "150px";
    document.getElementsByClassName("button__instagram")[0].style.top = "330px";

    document.getElementsByClassName("button__youtube")[0].style.zIndex = "5";
    document.getElementsByClassName("button__youtube")[0].style.left = "150px";
    document.getElementsByClassName("button__youtube")[0].style.top = "340px";

    document.getElementsByClassName("button__snapchat")[0].style.zIndex = "6";
    document.getElementsByClassName("button__snapchat")[0].style.left = "150px";
    document.getElementsByClassName("button__snapchat")[0].style.top = "350px";

    // Hide all apps that would otherwise be shown on the splash screens.
    var apps = document.getElementsByClassName('apps')[0];
    apps.classList.add('displaynone');

    // Add the splash screen.
    var element = document.getElementById("screen");
    element.classList.add("splash__reddit");

    // Wait 2 seconds before removing the css classes again.
    setTimeout(function () {
        element.classList.remove("splash__reddit");
        apps.classList.remove('displaynone');
    },
        3000);
}

function spotify() {
    resetStack();

    var element = document.getElementById("screen");
    element.classList.add("splash__spotify");

    document.getElementsByClassName("button__spotify")[0].style.zIndex = "1";
    document.getElementsByClassName("button__spotify")[0].style.left = "150px";
    document.getElementsByClassName("button__spotify")[0].style.top = "300px";

    document.getElementsByClassName("button__facebook")[0].style.zIndex = "2";
    document.getElementsByClassName("button__facebook")[0].style.left = "150px";
    document.getElementsByClassName("button__facebook")[0].style.top = "310px";

    document.getElementsByClassName("button__snapchat")[0].style.zIndex = "3";
    document.getElementsByClassName("button__snapchat")[0].style.left = "150px";
    document.getElementsByClassName("button__snapchat")[0].style.top = "320px";

    document.getElementsByClassName("button__reddit")[0].style.zIndex = "4";
    document.getElementsByClassName("button__reddit")[0].style.left = "150px";
    document.getElementsByClassName("button__reddit")[0].style.top = "330px";

    document.getElementsByClassName("button__youtube")[0].style.zIndex = "5";
    document.getElementsByClassName("button__youtube")[0].style.left = "150px";
    document.getElementsByClassName("button__youtube")[0].style.top = "340px";

    document.getElementsByClassName("button__instagram")[0].style.zIndex = "6";
    document.getElementsByClassName("button__instagram")[0].style.left = "150px";
    document.getElementsByClassName("button__instagram")[0].style.top = "350px";

    // Hide all apps that would otherwise be shown on the splash screens.
    var apps = document.getElementsByClassName('apps')[0];
    apps.classList.add('displaynone');

    // Add the splash screen.
    var element = document.getElementById("screen");
    element.classList.add("splash__spotify");

    // Wait 2 seconds before removing the css classes again.
    setTimeout(function () {
        element.classList.remove("splash__spotify");
        apps.classList.remove('displaynone');
    },
        3000);
}

function instagram() {
    resetStack();

    var element = document.getElementById("screen");
    element.classList.add("splash__instagram");

    document.getElementsByClassName("button__instagram")[0].style.zIndex = "1";
    document.getElementsByClassName("button__instagram")[0].style.left = "150px";
    document.getElementsByClassName("button__instagram")[0].style.top = "300px";

    document.getElementsByClassName("button__snapchat")[0].style.zIndex = "2";
    document.getElementsByClassName("button__snapchat")[0].style.left = "150px";
    document.getElementsByClassName("button__snapchat")[0].style.top = "310px";

    document.getElementsByClassName("button__spotify")[0].style.zIndex = "3";
    document.getElementsByClassName("button__spotify")[0].style.left = "150px";
    document.getElementsByClassName("button__spotify")[0].style.top = "320px";

    document.getElementsByClassName("button__youtube")[0].style.zIndex = "4";
    document.getElementsByClassName("button__youtube")[0].style.left = "150px";
    document.getElementsByClassName("button__youtube")[0].style.top = "330px";

    document.getElementsByClassName("button__reddit")[0].style.zIndex = "5";
    document.getElementsByClassName("button__reddit")[0].style.left = "150px";
    document.getElementsByClassName("button__reddit")[0].style.top = "340px";

    document.getElementsByClassName("button__facebook")[0].style.zIndex = "6";
    document.getElementsByClassName("button__facebook")[0].style.left = "150px";
    document.getElementsByClassName("button__facebook")[0].style.top = "350px";

    // Hide all apps that would otherwise be shown on the splash screens.
    var apps = document.getElementsByClassName('apps')[0];
    apps.classList.add('displaynone');

    // Add the splash screen.
    var element = document.getElementById("screen");
    element.classList.add("splash__instagram");

    // Wait 2 seconds before removing the css classes again.
    setTimeout(function () {
        element.classList.remove("splash__instagram");
        apps.classList.remove('displaynone');
    },
        3000);
}

function youtube() {
    resetStack();

    document.getElementsByClassName("button__youtube")[0].style.zIndex = "1";
    document.getElementsByClassName("button__youtube")[0].style.left = "150px";
    document.getElementsByClassName("button__youtube")[0].style.top = "300px";

    document.getElementsByClassName("button__snapchat")[0].style.zIndex = "2";
    document.getElementsByClassName("button__snapchat")[0].style.left = "150px";
    document.getElementsByClassName("button__snapchat")[0].style.top = "310px";

    document.getElementsByClassName("button__facebook")[0].style.zIndex = "3";
    document.getElementsByClassName("button__facebook")[0].style.left = "150px";
    document.getElementsByClassName("button__facebook")[0].style.top = "320px";

    document.getElementsByClassName("button__reddit")[0].style.zIndex = "4";
    document.getElementsByClassName("button__reddit")[0].style.left = "150px";
    document.getElementsByClassName("button__reddit")[0].style.top = "330px";

    document.getElementsByClassName("button__spotify")[0].style.zIndex = "5";
    document.getElementsByClassName("button__spotify")[0].style.left = "150px";
    document.getElementsByClassName("button__spotify")[0].style.top = "340px";

    document.getElementsByClassName("button__instagram")[0].style.zIndex = "6";
    document.getElementsByClassName("button__instagram")[0].style.left = "150px";
    document.getElementsByClassName("button__instagram")[0].style.top = "350px";

    // Hide all apps that would otherwise be shown on the splash screens.
    var apps = document.getElementsByClassName('apps')[0];
    apps.classList.add('displaynone');

    // Add the splash screen.
    var element = document.getElementById("screen");
    element.classList.add("splash__youtube");

    // Wait 2 seconds before removing the css classes again.
    setTimeout(function () {
        element.classList.remove("splash__youtube");
        apps.classList.remove('displaynone');
    },
        3000);
}