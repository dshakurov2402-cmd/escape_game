// Код для файла assets/level2.js
const encodedFlag = "RkxBR3tDT05TT0xFX0hBQ0tFUl8yMDI2fQ=="; 
const secret = atob(encodedFlag);

console.log("%c--- СИСТЕМНОЕ СООБЩЕНИЕ ---", "color: orange; font-weight: bold; font-size: 16px;");
console.log("Доступ к уровню 3 заблокирован.");
console.log("Ключ дешифрации: " + secret);

const input = document.getElementById('flagInput');
const button = document.getElementById('nextLevelBtn');

input.addEventListener('input', () => {
    if (input.value.trim() === secret) {
        button.disabled = false;
        button.style.backgroundColor = "#28a745";
    } else {
        button.disabled = true;
    }
});

button.addEventListener('click', () => {
    alert('Поздравляю! Ты взломал уровень папы!');
    window.location.href = "../index.html";
});