function animar (){
    const text = document.querySelector('.saludo');
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent ="";

    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick(){
        const span = text.querySelectorAll('span')[char];
        span.classList.add('animacion');
        char++
        if (char === splitText.length) {
            complete();
            return;
        }
    }

    function complete() {
        clearInterval(timer);
        timer = null;
    }
}

function regresar() {
    const text = document.querySelector('.saludo');
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent ="";

    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick(){
        const span = text.querySelectorAll('span')[char];
        span.classList.remove('animacion');
        char++
        if (char === splitText.length) {
            complete();
            return;
        }
    }

    function complete() {
        clearInterval(timer);
        timer = null;
    }
}