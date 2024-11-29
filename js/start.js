function toggleContent(cellId) {
    const cell = document.querySelector(`.grid-item:nth-child(${cellId})`);
    
    // Проверяем, существует ли уже содержимое, если нет, создаем его
    if (!cell.querySelector('.content')) {
        const newContent = document.createElement('div');
        newContent.classList.add('content');
        newContent.innerHTML = `<h2>Категория ${cellId}</h2><p>Содержимое категории ${cellId}</p>`;
        cell.appendChild(newContent);
        newContent.style.display = 'block';  // Показываем содержимое
    }
}
