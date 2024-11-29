function toggleContent(cellId) {
    const cell = document.querySelector(`.grid-item:nth-child(${cellId})`);
    
    // Если содержимое ещё не создано
    if (!cell.querySelector('.content')) {
        const newContent = document.createElement('div');
        newContent.classList.add('content');
        newContent.innerHTML = `<h2>Epic</h2><p>промокод</p>`;
        cell.appendChild(newContent);
        newContent.style.display = 'flex';  // Показываем содержимое с центровкой
    }
}

