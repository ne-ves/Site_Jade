document.getElementById('showFlowers').addEventListener('click', function() {
    var flowerContainer = document.getElementById('flowerContainer');

    // Mostrar e animar o buquê
    flowerContainer.classList.remove('hidden');
    setTimeout(function() {
        flowerContainer.classList.add('show');
    }, 100);
});

window.onload = function() {
    const petalContainer = document.querySelector('.petals');
    
    // Criar múltiplas pétalas para o efeito
    for (let i = 0; i < 20; i++) {
        let petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        petal.style.width = `${Math.random() * 20 + 10}px`;
        petal.style.height = petal.style.width;
        petalContainer.appendChild(petal);
    }
};