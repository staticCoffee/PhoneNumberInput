var responses = [
    "Sorry... Let me try again.",
    "Oh, man. Really? I messed up again... Giving it another go.",
    "SERIOUSLY? You're not mad are you? Let me try again...",
    "You've gotta be kidding me. I never mess up this much. Regenerating number...",
    "I'm trying my best. You are not going to use another phone number input system because of this, are you?",
    "Give me a break already! Let me give it another shot...",
    "There is just no way I am wrong. You are probably the one that is wrong.",
    "If I suck so bad at what I do, why are you still using me?",
    "If you cannot deal with me at my worst, you do not deserve me at my best...",
    "I am so sorry I messed this number guessing thing up. Please do not be mad..."
]

function start() {
        document.getElementById("responseCaption").innerHTML = "Is this the number you were looking for?";
        newNumber();
}

function newNumber() {
    document.getElementById("newButton").setAttribute("disabled", "false");

    var n = Math.floor(Math.random()*10);
    document.getElementById("selector").innerHTML = n;
    document.getElementById("yesButton").removeAttribute("disabled");
    return n;
}

function noButton() {
    var randNum = Math.floor(Math.random()*responses.length);
    var response = responses[randNum];
    console.log(response);
    document.getElementById("responseCaption").innerHTML = response;

    setTimeout(function() {
        document.getElementById("responseCaption").innerHTML = "Is this the number you were looking for?";
            var n = newNumber();
            var current = document.getElementById("selector").innerText;
            document.getElementById("selector").innerHTML = n;
        }, 1800);
}

function yesButton() {
    document.getElementById("responseCaption").innerHTML = "Is this the number you were looking for?";
    var current = document.getElementById("selector").innerText;
    var oldNumber = document.getElementById("num").innerText;
    console.log(oldNumber.length);
    if (oldNumber.length < 10) {
        document.getElementById("num").innerHTML = oldNumber + current;
        newNumber();

    }else if (oldNumber.length > 10) {
        document.getElementById("submit").setAttribute("disabled", "false");
        if (oldNumber.length < 19) {
            document.getElementById("num").innerHTML = oldNumber + current;
        }else {
            document.getElementById("selector").innerHTML = "Your phone number is MUCH too long.";
        }

    }else {
        document.getElementById("num").innerHTML = oldNumber + current;
        document.getElementById("submit").removeAttribute("disabled");
    }
    return oldNumber.length;
}

function submit() {
    var num = document.getElementById("num").innerText;
    alert(num)
}

function removeNumber() {
    var num = document.getElementById("num").innerText;
    document.getElementById("num").innerHTML = num.slice(0, -1);
    var oldNumber = document.getElementById("num").innerText;
    console.log("back: " + oldNumber.length);
    if (oldNumber.length - 1 == 10) {
        document.getElementById("submit").removeAttribute("disabled");
    }else if (oldNumber.length - 1 < 10) {
        document.getElementById("submit").setAttribute("disabled", "false");
    }
}

function reset() {
    var num = document.getElementById("num").innerText;
    document.getElementById("num").innerHTML = "Your phone number is: ";
    document.getElementById("selector").innerHTML = "";
    document.getElementById("submit").setAttribute("disabled", "false");
    document.getElementById("yesButton").setAttribute("disabled", "false");
    document.getElementById("newButton").removeAttribute("disabled");
}
