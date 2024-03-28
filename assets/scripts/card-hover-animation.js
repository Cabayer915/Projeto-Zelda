function handleMouseEnter() {
    this.classList.add('z-card--hovered');
}

function handleMouseLeave() {
    this.classList.remove('z-card--hovered');
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('z-card');

    for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);