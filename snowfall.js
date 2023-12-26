document.addEventListener("DOMContentLoaded", function () {
    createSnowflakes();
});

function createSnowflakes() {
    const numberOfSnowflakes = 50;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }
}

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    document.body.appendChild(snowflake);

    const initialX = Math.random() * window.innerWidth;
    const initialY = Math.random() * window.innerHeight;
    const size = Math.random() * 3;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${initialX}px`;
    snowflake.style.top = `${initialY}px`;

    animateSnowflake(snowflake);
}

function animateSnowflake(snowflake) {
    const speed = Math.random() * 1 + 0.5;

    setInterval(() => {
        const currentY = parseFloat(snowflake.style.top);
        snowflake.style.top = `${currentY + speed}px`;

        if (currentY > window.innerHeight) {
            snowflake.style.top = "0px";
        }
    }, 1000 / 60);
}
