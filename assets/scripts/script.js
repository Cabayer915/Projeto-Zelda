function handleMouseEnter() {
    this.classList.add('z-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
    this.classList.remove('z-card--hovered');
    document.body.id = '';
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

function selectCarouselItem(selectedItem) {
    const selectedItemId = selectedItem.id;
    const carousel = document.querySelector('.z-card-carousel')
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItemId) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
  
    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.z-controller__button--active');
    activeButtonElement.classList.remove('z-controller__button--active');
    selectedItem.classList.add('z-controller__button--active');
}