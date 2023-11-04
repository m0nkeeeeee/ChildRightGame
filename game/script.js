const playArea = document.getElementById("playArea");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");

let score = 0;
let timeLeft = 60; // 60 seconds

// ...
// ...
function createObject() {
    const object = document.createElement("div");
    object.className = "object";

    // Add a random icon to the object
    const icons = [
        "icons/childhood.png",
        "icons/educated.png",
        "icons/healthy.png",
        "icons/heard.png",
        "icons/treated_fairly.png"
    ];
    const randomIconPath = icons[Math.floor(Math.random() * icons.length)];

    // Create an <img> element and set its src attribute
    const imgElement = document.createElement("img");
    imgElement.src = randomIconPath;
    imgElement.alt = "Falling Image";

    // Append the <img> element to the object
    object.appendChild(imgElement);

    // Larger size
    object.style.width = "60px"; // Adjust the width and height as needed
    object.style.height = "60px";

    // Random position across the screen
    const xPos = Math.random() * (window.innerWidth - 60); // Adjust for object width
    object.style.left = `${xPos}px`;

    // Center vertically
    object.style.position = "absolute";
    object.style.top = "0";

    playArea.appendChild(object);

    // Move object downwards
    const fallInterval = setInterval(() => {
        const yPos = object.offsetTop;
        object.style.top = `${yPos + 5}px`;

        if (yPos > window.innerHeight) {
            object.remove();
        }
    }, 20);

    object.addEventListener("click", () => {
        score += 10; // Increase score for catching the right object
        scoreElement.textContent = score;
        object.remove();
    });
}
// ...

// ...

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeElement.textContent = timeLeft;
        setTimeout(updateTimer, 1000);
    } else {
        alert("Game Over! Your final score is: " + score);
        playArea.innerHTML = "";
    }
}

updateTimer();
setInterval(createObject, 1000); // Create objects every second
