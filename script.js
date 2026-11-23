const hero = document.querySelector('.hero');
const particulas = document.querySelector('.hero-particulas');

const caracteres = ['0', '1', '{', '}','[', ']','<', '>','/', ';','=', '&&','||', '=>','</>'];

const cores = ['#38bdf8','#38bdf8','#38bdf8','#38bdf8','#38bdf8','#38bdf8','#38bdf8','#7dd3fc','#7dd3fc','#4784f5','#e2e8f0'];

let ultimaPosicaoX = null;
let ultimaPosicaoY = null;

window.addEventListener('mousemove', function(event) {

    const areaHero = hero.getBoundingClientRect();
    const areaParticulas = particulas.getBoundingClientRect();

    const distanciaX = event.clientX - ultimaPosicaoX;
    const distanciaY = event.clientY - ultimaPosicaoY;

    const distancia = Math.hypot(distanciaX, distanciaY);
    const sobreContato = event.target.closest('.hero-botoes a:last-child');

    if (event.clientY >= areaHero.top && event.clientY <= areaHero.bottom &&(ultimaPosicaoX === null || distancia >= 35) && !sobreContato) {

        const indice = Math.floor(Math.random() * caracteres.length);
        const caractere = caracteres[indice];

        const indiceCor = Math.floor(Math.random() * cores.length);
        const cor = cores[indiceCor];

        const novoElemento = document.createElement('span');
        novoElemento.textContent = caractere;

        novoElemento.style.left = event.clientX - areaParticulas.left + 'px';
        novoElemento.style.top = event.clientY - areaParticulas.top + 'px';
        novoElemento.style.color = cor;

        particulas.appendChild(novoElemento);

        ultimaPosicaoX = event.clientX;
        ultimaPosicaoY = event.clientY;

        novoElemento.addEventListener('animationend', function() {
            novoElemento.remove();
        });
    }
});