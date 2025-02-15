function abrirCarta() {
    const sobre = document.querySelector('.sobre');
    const mensaje = document.getElementById('mensaje');

    sobre.style.transform = 'translateY(-100%)';
    mensaje.style.top = '0';
}

function crearLluviaCorazones() {
    const lluvia = document.createElement("div");
    lluvia.classList.add("lluvia");
    document.body.appendChild(lluvia);

    setInterval(() => {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon-chico");
        corazon.innerHTML = "❤️";
        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.animationDuration = (Math.random() * 2 + 3) + "s";

        lluvia.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 5000);
    }, 300);
}

crearLluviaCorazones();
