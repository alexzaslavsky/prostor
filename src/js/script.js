window.onload = function () {

    document.querySelector(".menu-icon").onclick = function () {
        this.classList.toggle('menu-icon-active');
        document.querySelector(".main-links").classList.toggle('main-links-tablet');
    };

    slide();

    window.onscroll = function () {
        slide();
    };

    window.onresize = function() {
        getInputs();
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

    // --- RADIO INPUTS FOR FEEDBACK ---

    function getInputs() {
        var clients = document.querySelectorAll('.client');
        var inputsQuantity = 0;
        if (window.innerWidth >= 992) {
            inputsQuantity = Math.ceil(clients.length / 3);
        }
        else if (window.innerWidth < 992) {
            inputsQuantity = Math.ceil(clients.length / 2);
        }
        var feedback = document.querySelector('.feedback-inputs');

        feedback.innerHTML = '';

        for (var i = 0; i < inputsQuantity; i++) {
            if (i === 0) {
                feedback.insertAdjacentHTML('beforeEnd',
                    '<input type="radio" name="tabs" checked id="tab-' + (i + 1) + '"><label for="tab-' + (i + 1) + '"></label>')
            }
            else {
                feedback.insertAdjacentHTML('beforeEnd',
                    '<input type="radio" name="tabs" id="tab-' + (i + 1) + '"><label for="tab-' + (i + 1) + '"></label>')
            }
        }
    }

    getInputs();

    var inputs = document.querySelectorAll('.feedback-inputs>input');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', getFeedback);
    }

    function getFeedback() {
        var id = this.getAttribute('id').replace('tab-', '');
        if (window.innerWidth >= 992) {
            var columns = document.querySelectorAll('.clients>.col-lg-4');
            for (var i = 0; i < columns.length; i++) {
                columns[i].style.display = 'none';
            }
            for (var i = id * 3 - 3; i < id * 3; i++) {
                if (columns.length > i) {
                    columns[i].style.display = 'block';
                }
            }
        }
        else if (window.innerWidth < 992) {
            var columns = document.querySelectorAll('.clients>.col-md-6');
            for (var i = 0; i < columns.length; i++) {
                columns[i].style.display = 'none';
            }
            for (var i = id * 2 - 2; i < id * 2; i++) {
                if (columns.length > i) {
                    columns[i].style.display = 'block';
                }
            }
        }
    }
};