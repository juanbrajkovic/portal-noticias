document.addEventListener(
    "DOMContentLoaded",
    iniciar
);

function iniciar(){

    inicializarNoticias();

    mostrarNoticias();

    obtenerDolar();

    cargarTema();

}

function mostrarNoticias(){

    const contenedor =
        document.getElementById("noticias");

    const noticias =
        obtenerNoticias();

    contenedor.innerHTML = "";

    noticias.forEach(noticia => {

        contenedor.innerHTML += `
        <div class="card">

            <img src="${noticia.imagen}">

            <h3>${noticia.titulo}</h3>

            <p>${noticia.descripcion}</p>

        </div>
        `;

    });

}

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener(
    "click",
    cambiarTema
);

function cambiarTema(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }

}

function cargarTema(){

    const tema =
    localStorage.getItem("theme");

    if(tema === "dark"){
        document.body.classList.add("dark");
    }

}