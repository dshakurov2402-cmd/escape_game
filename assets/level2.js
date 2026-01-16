// assets/level2.js

// Это закодированный флаг "FLAG{CONSOLE_HACKER_2026}"
const _0x4f22 = "RkxBR3tDT05TT0xFX0hBQ0tFUl8yMDI2fQ=="; 

console.log("%c--- СИСТЕМНОЕ СООБЩЕНИЕ ---", "color: orange; font-weight: bold; font-size: 16px;");
console.log("Доступ к уровню 3 заблокирован.");
console.log("Ключ дешифрации: " + atob(_0x4f22)); // atob расшифрует это только в консоли
console.log("---------------------------");

const input = document.getElementById('flagInput');
const button = document.getElementById('nextLevelBtn');

input.addEventListener('input', () => {
    // Проверяем ввод, сравнивая его с расшифрованным значением
    if (input.value.trim() === atob(_0x4f22)) {
        button.disabled = false;
        button.style.backgroundColor = "#28a745";
    } else {
        button.disabled = true;
        button.style.backgroundColor = "#007bff";
    }
});

button.addEventListener('click', () => {
    alert('Поздравляю! Ты взломал уровень папы! \n\nТы крутышка!.\n\nТеперь ТВОЙ ХОД:\n1. Создай файл levels/level3.html\n2. Придумай свою загадку для меня!');
    window.location.href = "../index.html";
});