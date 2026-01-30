// 🎶 Кнопка з піснею
document.getElementById("musicBtn").addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/watch?v=N3BjRp8QvSc";
});

// ❄️ Сніжинки
const COUNT = 50;

for (let i = 0; i < COUNT; i++) {
    const snow = document.createElement("div");
    snow.className = "snowflake";
    snow.textContent = "❄";

    snow.style.left = Math.random() * 100 + "vw";
    snow.style.fontSize = (10 + Math.random() * 20) + "px";
    snow.style.animationDuration = (5 + Math.random() * 6) + "s";
    snow.style.opacity = Math.random();

    document.body.appendChild(snow);
}
