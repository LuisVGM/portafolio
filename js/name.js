function animarName (){
    const text = document.querySelector('.nombre');
    const strText = text.textContent;
    const splitText = strText.split(",");
    text.textContent ="";

    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }
    
    let char = 0;
    let timer = setInterval(onTick, 50);
    
    function onTick(){
        const span = text.querySelectorAll('span')[char];
        span.classList.add('animacionName');
        
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

function regresarName() {
    const text = document.querySelector('.nombre');
    const strText = text.textContent;
    const splitText = strText.split(",");
    text.textContent ="";

    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }
    
    let char = 0;
    let timer = setInterval(onTick, 50);
    
    function onTick(){
        const span = text.querySelectorAll('span')[char];
        span.classList.remove('animacionName');
        
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