let chances = 5;
let Hpoints = 0;
let Cpoints = 0;


function clicked(a) {
    chances--;
    const humanChoice = a;
    const computerChoice = Math.floor(Math.random() * 3);
    document.getElementById("computerChoicePrint").innerHTML = getComputerChoice(computerChoice);
    {
        let rndResult = document.getElementById("roundResultPrint");
        let Hscore = document.getElementById("Hpoints");
        let Cscore = document.getElementById("Cpoints");
        if (getRoundResult(humanChoice, computerChoice) == -1) {
            chances++;
            rndResult.innerHTML = "It's a draw"
        }
        else if (getRoundResult(humanChoice, computerChoice)) {
            Hpoints++;
            rndResult.innerHTML = "You Won This Round"
            addHSCss()
            removeCSCss()
            Hscore.innerHTML = Hpoints;
        }
        else {
            Cpoints++;
            rndResult.innerHTML = "Computer won this round"
            addCSCss()
            removeHSCss()
            Cscore.innerHTML = Cpoints;
        }
    }

    {
        if (chances <= 0) {
            document.getElementById("reset").style.display = "block";
            document.getElementById("reset").classList.add("btn")
            if (Hpoints > Cpoints) {
                document.getElementById("scorePrint").innerHTML = "Congrats! You Won,But You Couldn't Win Her Heart";
                removeHSCss();
                removeCSCss();
                return;
            }
            else {
                document.getElementById("scorePrint").innerHTML = "You Lost! Just Like You Lost Her";
                removeHSCss();
                removeCSCss();
                return;
            }
        }
    }


    function getComputerChoice(computerChoice) {
        switch (computerChoice) {
            case 0: return "Rock"
            case 1: return "Paper"
            case 2: return "Scissor"
        }
    }

    function getRoundResult(humanChoice, computerChoice) {

        if (computerChoice == humanChoice) {
            return -1;
        }
        else if ((humanChoice == 0 && computerChoice == 2) ||
            (humanChoice == 1 && computerChoice == 0) ||
            (humanChoice == 2 && computerChoice == 1)
        ) {
            return true;
        }
        else {
            return false;
        }
    }

}

function addHSCss() {
    let hsdiv = document.getElementById("hsdiv");
    hsdiv.style.transform = "scale(1.3)"
    hsdiv.style.boxShadow = "0px 0px 10px 3px limegreen"
}

function addCSCss() {
    let csdiv = document.getElementById("csdiv");
    csdiv.style.transform = "scale(1.3)"
    csdiv.style.boxShadow = "0px 0px 10px 3px red"
}

function removeHSCss() {
    let hsdiv = document.getElementById("hsdiv");
    hsdiv.style.transform = "scale(1)"
    hsdiv.style.boxShadow = "0px 0px 10px 0px gold"
}

function removeCSCss() {
    let csdiv = document.getElementById("csdiv");
    csdiv.style.transform = "scale(1)"
    csdiv.style.boxShadow = "0px 0px 10px 0px gold"
}


function reset() {
    let rndResult = document.getElementById("roundResultPrint");
    let Hscore = document.getElementById("Hpoints");
    let Cscore = document.getElementById("Cpoints");
    Hpoints = 0;
    Cpoints = 0;
    chances = 5;

    document.getElementById("scorePrint").innerHTML = "-";
    document.getElementById("computerChoicePrint").innerHTML = "-";

    rndResult.innerHTML = "-"
    Hscore.innerHTML = Hpoints;
    Cscore.innerHTML = Cpoints;

    document.getElementById("reset").style.display = "none";
}