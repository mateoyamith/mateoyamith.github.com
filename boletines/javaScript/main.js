//console.log("Hola mundo desde el archivo");

//DOM
//querySelectorAll / querySelector

/*
let links = document.querySelectorAll("a");

links.forEach(function(link) {
    console.log(link)
})
*/

//console.log(links);

/*
let td = document.querySelectorAll("td");

td.forEach(function(td) {
    td.addEventListener('click', function() {
        console.log(this);
    })
})
*/

//Obtener los elementos de la clase .close del html sensei
let links = document.querySelectorAll(".close");
//Recorrelos
links.forEach(function(cls) {
    //Agregar un evento click en cada uno de ellos
    cls.addEventListener('click', function(ev) {
        ev.preventDefault();
        let content = document.querySelector(".content");

        //Quitarle las clases de animacion que ya tiene
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");

        //Agregar clases para animar su salida fadeOutUp
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        //Retrasar tiempo para que se vea la animacion
        setTimeout(function() {
            location.href = "/";
        }, 1000);

        /*
        setInterval(() => {
            location.href = "/";
        }, 1000);
        */
    });
});