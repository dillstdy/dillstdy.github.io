```javascript
/* =========================
   MATRIX EFFECT
========================= */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@";

const fontSize = 14;

let columns = Math.floor(canvas.width / fontSize);

let drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}


function drawMatrix() {

    ctx.fillStyle = "rgba(3, 7, 18, 0.08)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "#8b5cf6";

    ctx.font = fontSize + "px monospace";


    for (let i = 0; i < drops.length; i++) {

        const text =
            letters[
                Math.floor(
                    Math.random() * letters.length
                )
            ];

        ctx.fillText(
            text,
            i * fontSize,
            drops[i] * fontSize
        );


        if (
            drops[i] * fontSize >
                canvas.height &&
            Math.random() > 0.975
        ) {
            drops[i] = 0;
        }

        drops[i]++;
    }

}

setInterval(drawMatrix, 50);


window.addEventListener(
    "resize",
    () => {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

        columns =
            Math.floor(
                canvas.width / fontSize
            );

        drops = [];

        for (
            let i = 0;
            i < columns;
            i++
        ) {
            drops[i] = 1;
        }

    }
);


/* =========================
   INTERACTIVE TERMINAL
========================= */

const commandInput =
    document.getElementById("command");

const output =
    document.getElementById("terminal-output");


function printCommand(command) {

    const line =
        document.createElement("p");

    line.innerHTML =
        `<span class="blue">
        cyber2@kali:~$
        </span> ${command}`;

    output.appendChild(line);

}


function printResult(text) {

    const result =
        document.createElement("p");

    result.innerHTML = text;

    output.appendChild(result);

}


commandInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key !== "Enter") {
            return;
        }


        const command =
            commandInput.value
                .trim()
                .toLowerCase();


        if (!command) {
            return;
        }


        printCommand(command);


        if (command === "help") {

            printResult(`
                <span class="purple">
                Available commands:
                </span><br>
                whoami<br>
                skills<br>
                about<br>
                clear<br>
                help
            `);

        }


        else if (command === "whoami") {

            printResult(
                "Cybersecurity Student"
            );

        }


        else if (command === "skills") {

            printResult(`
                Web Security<br>
                Linux<br>
                Digital Forensics<br>
                Reverse Engineering<br>
                Cryptography<br>
                Binary Exploitation
            `);

        }


        else if (command === "about") {

            printResult(
                "Student yang sedang belajar cybersecurity."
            );

        }


        else if (command === "clear") {

            output.innerHTML = "";

        }


        else {

            printResult(
                `Command not found: ${command}`
            );

        }


        commandInput.value = "";

        output.scrollTop =
            output.scrollHeight;

    }
);
```