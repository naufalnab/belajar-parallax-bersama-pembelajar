let background_kanan1 = document.getElementById('background-kanan1');
let background_kiri1 = document.getElementById('background-kiri1');
let background_text1 = document.getElementById('background-text1');
let belajar1 = document.getElementById('belajar1');
let bersama_pembelajar1 = document.getElementById('bersama-pembelajar1');
let parallax1 = document.getElementById('parallax-text1');
let gambar2 = document.getElementById('gambar2');
let css2 = document.getElementById('css2');
let daun2 = document.getElementById('daun2');
let html2 = document.getElementById('html2');
let javascript2 = document.getElementById('javascript2');
let one_line2 = document.getElementById('one-line2');
let text_editor2 = document.getElementById('text-editor2');
let bunga2 = document.getElementById('bunga2');
let background3 = document.getElementById('background3');
let bulan3 = document.getElementById('bulan3');
let burung_kanan3 = document.getElementById('burung-kanan3');
let burung_kiri3 = document.getElementById('burung-kiri3');
let gunung_belakang3 = document.getElementById('gunung-belakang3');
let semoga_bermanfaat3 = document.getElementById('semoga-bermanfaat3');
let gunung_depan3 = document.getElementById('gunung-depan3');
let background4 = document.getElementById('background4');
let android_studio4 = document.getElementById('android-studio4');
let eclipse4 = document.getElementById('eclipse4');
let intellij4 = document.getElementById('intellij4');
let notepad_4 = document.getElementById('notepad++4');
let pycharm4 = document.getElementById('pycharm4');
let sublime4 = document.getElementById('sublime4');
let vim4 = document.getElementById('vim4');
let visual_studio_code4 = document.getElementById('visual-studio-code4');
let visual_studio4 = document.getElementById('visual-studio4');

window.addEventListener('scroll', () => {
    let { scrollY } = window;
    console.log(scrollY);
    background_kanan1.style.left = -2 * scrollY + 'px';
    background_kanan1.style.top = -0.5 * scrollY + 'px';
    background_kiri1.style.left = 2 * scrollY + 'px';
    background_kiri1.style.top = -0.5 * scrollY + 'px';
    background_text1.style.top = -0.5 * scrollY + 'px';
    belajar1.style.left = 1.5 * scrollY + 'px';
    bersama_pembelajar1.style.left = -0.5 * scrollY + 'px';
    parallax1.style.left = -0.1 * scrollY + 'px';
    text_editor2.style.left = (385 + 0.5 * scrollY) + 'px';
    gambar2.style.left = (1450 - 0.5 * scrollY) + 'px';
    html2.style.top = 0.2 * scrollY + 'px';
    css2.style.top = (350 - 0.2 * scrollY) + 'px';
    javascript2.style.left = 0.4 * scrollY + 'px';
    daun2.style.left = -0.4 * scrollY + 'px';
    bunga2.style.left = 0.4 * scrollY + 'px';
    bulan3.style.left = -0.2 * scrollY + 'px';
    bulan3.style.top = 0.2 * scrollY + 'px';
    gunung_depan3.style.top = 0.05 * scrollY + 'px';
    gunung_depan3.style.left = 0.1 * scrollY + 'px';
    gunung_belakang3.style.top = 0.05 * scrollY + 'px';
    gunung_belakang3.style.left = -0.1 * scrollY + 'px';
    background3.style.top = 0.01 * scrollY + 'px';
    burung_kiri3.style.left = -0.03 * scrollY + 'px';
    burung_kiri3.style.top = -0.1 * scrollY + 'px';
    burung_kanan3.style.left = 0.07 * scrollY + 'px';
    semoga_bermanfaat3.style.top = -0.03 * scrollY + 'px';
    // android_studio4.style.left = 0 * scrollY + 'px';
});