function Menu() {
    const Menu2 = document.getElementById('Menuu');
    if(Menu2.style.display === "none") Menu2.style.display = "block";
    else Menu2.style.display = "none";
}
function Configuracion() {
    const Menu = document.getElementById('nav');
    if(Menu.style.display === "none") Menu.style.display = "block";
    else Menu.style.display = "none";
}
function Idioma() {
    const Menu = document.getElementById('Menu-Idioma');
    if(Menu.style.display === "none") Menu.style.display = "block";
    else Menu.style.display = "none";
}
function Black(){
    const Fondo = document.getElementById('Body');
    const letra = document.querySelectorAll('li');
    const span = document.querySelectorAll('span');
    const p = document.querySelectorAll('p');
    const section = document.querySelectorAll('section');
    const h2 = document.querySelectorAll('h2');
    const button = document.querySelectorAll('button');
    const Menu_Idioma = document.getElementById('Menu-Idioma');
    if (Fondo.style.background === "#181821") {
        Fondo.style.background = "white";
        Menu_Idioma.style.background = "white";
        
        for (let i = 0; i < letra.length; i++) {
            letra[i].style.color = 'black';
        }

        for (let z = 0; z < span.length; z++) {
            span[z].style.color = 'black';
        }
        for (let y = 0; y < p.length; y++) {
            p[y].style.color = 'black';
        }
        for (let a = 0; a < section.length; a++) {
            section[a].style.background = 'white';
        }
        for (let b = 0; b < h2.length; b++) {
            h2[b].style.color = 'black';
        }
        for (let c = 0; c < button.length; c++) {
            button[c].style.background = '';
            button[c].style.color = 'black';
        }
    }
    else{
        Fondo.style.background = "#181821";
        Menu_Idioma.style.background = "#181821";
        
        for (let i = 0; i < letra.length; i++) {
            letra[i].style.color = 'white';
        }

        for (let z = 0; z < span.length; z++) {
            span[z].style.color = 'blue';
        }
        for (let y = 0; y < p.length; y++) {
            p[y].style.color = 'white';
        }
        for (let a = 0; a < section.length; a++) {
            section[a].style.background = '#181821';
        }
        for (let b = 0; b < h2.length; b++) {
            h2[b].style.color = 'white';
        }
        for (let c = 0; c < button.length; c++) {
            button[c].style.color = 'white';
        }
    }
}


let deslice = false;
function boton_Pantalla(){
    let Fondo = document.getElementById('Fondo');
    let Boton = document.getElementById('Circulo');
    const h1 = document.getElementById('blanco');
    const nav = document.getElementById('nav');
    let header = document.getElementById('Header').style.background = '#181821';
    
    Boton.style.background = '#000000';
    if(!deslice){
        nav.style.background = '#181821';
        Fondo.style.background = '#0643BD';
        Fondo.style.transition = '0.5s';
        Boton.style.background = '#181821';
        Boton.style.marginLeft = '35px';
        Boton.style.transition = '0.5s';
        h1.style.color = 'white';
        deslice = true;
        Black();
        
    }
    else{
        nav.style.background = '#181821';
        Boton.style.background = '#0643BD';
        Fondo.style.transition = '0.5s';
        Fondo.style.background = '#181821';
        Boton.style.transition = '0.5s';
        Boton.style.marginLeft = '0px';
        deslice = false;
        h1.style.color = 'black';
        let header = document.getElementById('Header').style.background = 'white';
        Black();
    }
}
function Menu_Desplegable(){
    const Menu = document.getElementById('Menuu');
    const boton = document.getElementById('botoncito');
    if (Menu.style.display === 'none') {
        Menu.style.display = 'inline-block';
        Menu.style.left = '20px';
        Menu.style.transition = '.5s';
        boton.style.left = '220px';
    }
    else{
        Menu.style.display = 'none';
        Menu.style.transition = '.5s';
        boton.style.left = '0px';
    }
}