let background = document.getElementById('background');
let background_kanan = document.getElementById('background-kanan');
let background_kiri = document.getElementById('background-kiri');
let background_text = document.getElementById('background-text');
let belajar = document.getElementById('belajar');
let bersama_pembelajar = document.getElementById('bersama-pembelajar');
let clipboard = document.getElementById('clipboard');
let parallax = document.getElementById('parallax');

window.addEventListener('scroll', () => {
    let { scrollY } = window;
    background_kanan.style.left = -2 * scrollY + 'px';
    background_kiri.style.left = 2 * scrollY + 'px';
    background_text.style.top = -0.5 * scrollY + 'px';
    belajar.style.left = 1.5 * scrollY + 'px';
    bersama_pembelajar.style.left = -0.5 * scrollY + 'px';
    parallax.style.left = -0.1 * scrollY + 'px';
});