function toggleContent(cellId) {
    const cell = document.querySelector(`.grid-item:nth-child(${cellId})`);
    
    // Если содержимое ещё не создано
    if (!cell.querySelector('.content')) {
        const newContent = document.createElement('div');
        newContent.classList.add('content');

        // Устанавливаем разный текст в зависимости от номера клетки
        let contentHTML = '';
        switch (cellId) {
            case 1:
                contentHTML = `<h2>Common</h2><p>Здесь находится промокод уровня Common, доступный для всех.</p>`;
                break;
            case 2:
                contentHTML = `<h2>Uncommon</h2><p>Промокод уровня Uncommon, немного редче, чем Common.</p>`;
                break;
            case 3:
                contentHTML = `<h2>Rare</h2><p>Промокод уровня Rare, это редкая находка!</p>`;
                break;
            case 4:
                contentHTML = `<h2>Epic</h2><p>Промокод уровня Epic, очень ценный промокод!</p>`;
                break;
            case 5:
                contentHTML = `<h2>Legendary</h2><p>Промокод уровня Legendary, крайне редкий и ценный!</p>`;
                break;
            default:
                contentHTML = `<h2>Unknown</h2><p>Описание недоступно.</p>`;
        }

        newContent.innerHTML = contentHTML;
        cell.appendChild(newContent);
        newContent.style.display = 'flex';  // Показываем содержимое с центровкой
    }
}
