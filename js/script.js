// Гамбургер-меню
const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

// Обработчик для гамбургер-меню
if (hamburgerMenu && navMenu) {
    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Переключаем класс active
    });
} else {
    console.error('Элементы гамбургер-меню или меню навигации не найдены!');
}

// Обработчик изменения размера экрана
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        // Сбрасываем активное состояние меню на больших экранах
        navMenu.classList.remove('active');
    }
});

// Игровое поле
const grid = document.getElementById('game-grid');
const balanceElement = document.getElementById('balance');
const cellCost = 10; // Стоимость клетки

function createGameGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('game-cell');
        cell.addEventListener('click', () => openCell(cell));
        
        // Устанавливаем содержимое клетки
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = '🎁'; // Подарок в каждой клетке
        cell.appendChild(content);

        grid.appendChild(cell);
    }
}

// Функция открытия клетки
function openCell(cell) {
    if (cell.classList.contains('open')) return; // Уже открыта
    const balance = parseInt(balanceElement.textContent);
    if (balance >= cellCost) {
        balanceElement.textContent = balance - cellCost; // Списать монеты
        cell.classList.add('open'); // Открыть клетку

        // Добавляем результат в историю (один раз для каждой клетки)
        if (!cell.dataset.addedToHistory) {
            const prize = '🎁 Промокод на скидку!';
            addToHistory(prize); // Добавляем результат в историю
            cell.dataset.addedToHistory = true; // Помечаем клетку как занесенную в историю
        }

        // Проверяем состояние переключателя и показываем модальное окно только при включенной галочке
        const showResultToggle = document.getElementById('show-result-toggle');
        if (showResultToggle && showResultToggle.checked) {
            showModal('🎁 Промокод на скидку!'); // Показать модальное окно
        }
    } else {
        alert('Недостаточно монет!');
    }
}

// Функция добавления результата в историю
function addToHistory(prize) {
    const historyList = document.getElementById('history-list');
    if (historyList) {
        const historyItem = document.createElement('li');
        historyItem.textContent = prize; // Добавляем текст с промокодом
        historyList.appendChild(historyItem);
    }
}

// Функция для отображения модального окна с результатом
function showModal(prize) {
    const modal = document.getElementById('result-modal');
    const prizeContent = document.getElementById('prize-content');
    if (modal && prizeContent) {
        prizeContent.textContent = prize; // Устанавливаем текст приза
        modal.style.display = 'flex'; // Показать модальное окно
    }
}

// Функция для закрытия модального окна
function closeModal() {
    const modal = document.getElementById('result-modal');
    if (modal) {
        modal.style.display = 'none'; // Скрыть модальное окно
    }
}

// Создаем игровую сетку 4x4
createGameGrid(4);


