const noButton = document.querySelector('#noButton');

noButton.addEventListener('click', function () {
    alert('Igual ni queriamos que vengas')
});

const yesButton = document.querySelector('#yesButton');
let moveInterval; // Variable para almacenar el intervalo de movimiento

function moveButton() {
    const randomX = parseInt(Math.random() * 250);
    const randomY = parseInt(Math.random() * 250);
    yesButton.style.setProperty('top', randomY + '%');
    yesButton.style.setProperty('left', randomX + '%');
    yesButton.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
}

// Llama a la función moveButton cada 500 milisegundos (0.5 segundos)
moveInterval = setInterval(moveButton, 50);

// Detener el movimiento y mostrar una alerta si el botón se hace clic
yesButton.addEventListener('click', function() {
    clearInterval(moveInterval); // Detener el movimiento
    alert('¡Que la pases lindo con tus amigas!!!!!'); // Mostrar alerta
});
