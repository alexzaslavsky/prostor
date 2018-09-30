window.onload = function() {

    document.querySelector(".menu-icon").onclick = function() {
        this.classList.toggle('menu-icon-active');
        document.querySelector(".main-links").classList.toggle('main-links-tablet');
    };

    slide();

    window.onscroll = function() {
        slide();
    };

    function slide() {
        var view = window.innerHeight - 100;

        var elementsR = document.querySelectorAll('.right-slide');

        for (var i = 0; i < elementsR.length; i++) {
            if (elementsR[i].getBoundingClientRect().top < view) {
                elementsR[i].classList.add('right-animation');
            }
        }

        var elementsL = document.querySelectorAll('.left-slide');

        for (var i = 0; i < elementsL.length; i++) {
            if (elementsL[i].getBoundingClientRect().top < view) {
                elementsL[i].classList.add('left-animation');
            }
        }

        var elementsB = document.querySelectorAll('.bottom-slide');

        for (var i = 0; i < elementsB.length; i++) {
            if (elementsB[i].getBoundingClientRect().top < view) {
                elementsB[i].classList.add('bottom-animation');
            }
        }
    };

    // ---Ripple-effect on main links click---

    var links = document.querySelectorAll('a');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', createRipple);
    }

    function createRipple(e) {
        var circle = document.createElement('span');
        this.appendChild(circle);

        circle.style.left = e.clientX - this.getBoundingClientRect().left + 'px';
        circle.style.top = e.clientY - this.getBoundingClientRect().top + 'px';

        circle.classList.add("ripple");
    };

};