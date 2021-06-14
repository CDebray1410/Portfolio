window.addEventListener('scroll', reveals);

function reveals () {
    var reveals = document.querySelectorAll('.reveals');
    for(let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 300;

        if(revealTop < (windowHeight - revealPoint)) {
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active')
        } 
    }

    var revealsSlide = document.querySelectorAll('.revealsSlide');
    for(let i = 0; i < revealsSlide.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = revealsSlide[i].getBoundingClientRect().top;
        let revealPoint = 300;

        if(revealTop < (windowHeight - revealPoint)) {
            revealsSlide[i].classList.add('active')
        } else {
            revealsSlide[i].classList.remove('active')
        } 
    }

    var revealsTop = document.querySelectorAll('.revealsTop');
    for(let p = 0; p < revealsTop.length; p++) {
        let windowHeight = window.innerHeight;
        let revealTop = revealsTop[p].getBoundingClientRect().top;
        let revealPoint = 50;

        if(revealTop < (windowHeight - revealPoint)) {
            revealsTop[p].classList.add('active')
        } else {
            revealsTop[p].classList.remove('active')
        } 
    }
}