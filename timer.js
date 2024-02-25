import inquirer from "inquirer";
async function TIMER() {
    let input = await inquirer.prompt({ type: "number",
        name: "ans",
        message: "enter time in seconds from 0 to 59 :" });
    let start = new Date();
    let seconds = start.getSeconds();
    let end = new Date(start);
    end.setSeconds(end.getSeconds() + input.ans);
    let interval = setInterval(() => {
        let currentTime = new Date();
        let currentSeconds = currentTime.getSeconds();
        if (currentSeconds === end.getSeconds()) {
            clearInterval(interval);
            console.log(`your time of ${input.ans} seconds has finished`);
        }
    }, 1000);
}
TIMER();
