window.onload = function(){
    const navigation = document.querySelector('.navigation');
    let toggle = document.querySelectorAll('.toggle');
    toggle[0].onclick = function () {
        this.classList.toggle('active');
        navigation.classList.toggle('active');
    }

    let overlay = document.getElementById('overlay');
    let profileImg = document.querySelectorAll('.aboutMe__infos__picture').forEach(item => {
        item.addEventListener('click', event => {
            item.classList.toggle('active');
            overlay.classList.toggle('active');
            item.parentNode.style.zIndex = "1000";
        })
    })
    
    let imgProjectsLists = document.querySelectorAll('.slider').forEach(item => {
        item.addEventListener('click', event => {
            item.classList.toggle('active');
        })
    })
};