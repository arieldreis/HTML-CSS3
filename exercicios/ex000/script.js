const circulo = document.querySelector('.meu-circulo');
const quadrado = document.querySelector('.meu-quadrado');
const triangulo = document.querySelector('.meu-triangulo');
let r = 0;

circulo.addEventListener('click', () => {
  if (r < 1) r += 0.1;
  circulo.setAttribute('fill', `rgba(255, 0, 0, ${r})`);
});
quadrado.addEventListener('click', () => {});
triangulo.addEventListener('click', () => {});