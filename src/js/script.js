window.onload = function() {

    slide();

    window.onscroll = function() {
        slide();
    }

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
    }

};