window.onload = function () {

    document.querySelector(".menu-icon").onclick = function () {
        this.classList.toggle('menu-icon-active');
        document.querySelector(".main-links").classList.toggle('main-links-tablet');
    };

    slide();
    getInputs();
    addClickEventOnInputs();

    window.onscroll = function () {
        slide();
    };

    window.onresize = function() {
        getInputs();
        addClickEventOnInputs();
        getFeedbackOnResize();
    };

    function slide() {
        const view = window.innerHeight - 100;

        const elementsR = document.querySelectorAll('.right-slide');

        for (let i = 0; i < elementsR.length; i++) {
            if (elementsR[i].getBoundingClientRect().top < view) {
                elementsR[i].classList.add('right-animation');
            }
        }

        const elementsL = document.querySelectorAll('.left-slide');

        for (let i = 0; i < elementsL.length; i++) {
            if (elementsL[i].getBoundingClientRect().top < view) {
                elementsL[i].classList.add('left-animation');
            }
        }

        const elementsB = document.querySelectorAll('.bottom-slide');

        for (let i = 0; i < elementsB.length; i++) {
            if (elementsB[i].getBoundingClientRect().top < view) {
                elementsB[i].classList.add('bottom-animation');
            }
        }
    }

    // ---Ripple-effect on main links click---

    const links = document.querySelectorAll('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', createRipple);
    }

    function createRipple(e) {
        const circle = document.createElement('span');
        this.appendChild(circle);

        circle.style.left = e.clientX - this.getBoundingClientRect().left + 'px';
        circle.style.top = e.clientY - this.getBoundingClientRect().top + 'px';

        circle.classList.add("ripple");
    }

    // --- RADIO INPUTS FOR FEEDBACK ---

    function getInputs() {
        const clients = document.querySelectorAll('.client');
        let inputsQuantity = 0;
        if (window.innerWidth >= 992) {
            inputsQuantity = Math.ceil(clients.length / 3);
        }
        else if (window.innerWidth < 992) {
            inputsQuantity = Math.ceil(clients.length / 2);
        }
        const feedback = document.querySelector('.feedback-inputs');

        feedback.innerHTML = '';

        for (let i = 0; i < inputsQuantity; i++) {
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

    function addClickEventOnInputs() {

        const inputs = document.querySelectorAll('.feedback-inputs>input');

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('click', getFeedback);
        }

    }

    function getFeedback() {
        const id = this.getAttribute('id').replace('tab-', '') || 1;
        if (window.innerWidth >= 992) {
            const columns = document.querySelectorAll('.clients>.col-lg-4');
            for (let i = 0; i < columns.length; i++) {
                columns[i].style.display = 'none';
            }
            for (let i = id * 3 - 3; i < id * 3; i++) {
                if (columns.length > i) {
                    columns[i].style.display = 'block';
                }
            }
        }
        else if (window.innerWidth < 992) {
            const columns = document.querySelectorAll('.clients>.col-md-6');
            for (let i = 0; i < columns.length; i++) {
                columns[i].style.display = 'none';
            }
            for (let i = id * 2 - 2; i < id * 2; i++) {
                if (columns.length > i) {
                    columns[i].style.display = 'block';
                }
            }
        }
    }

    function getFeedbackOnResize() {
        let id = 1;
        if (window.innerWidth >= 992) {
            const columns = document.querySelectorAll('.clients>.col-lg-4');

            for (let i = 0; i < columns.length; i++) {
                if (columns[i].style.display === 'block') {
                   id = Math.ceil((i + 1) / 3);
                   const tab = '#tab-' + id;
                   document.querySelector(tab).setAttribute('checked', '');
                   break;
                }
            }

            for (let i = 0; i < columns.length; i++) {
                columns[i].style.display = 'none';
            }

            for (let i = id * 3 - 3; i < id * 3; i++) {
                if (columns.length > i) {
                    columns[i].style.display = 'block';
                }
            }
        }
        else if (window.innerWidth < 992) {
            const columns = document.querySelectorAll('.clients>.col-md-6');

            for (let i = 0; i < columns.length; i++) {
                if (columns[i].style.display === 'block') {
                    id = Math.ceil((i + 1) / 2);
                    const tab = '#tab-' + id;
                    document.querySelector(tab).setAttribute('checked', '');
                    break;
                }
            }

            for (let i = 0; i < columns.length; i++) {
                columns[i].style.display = 'none';
            }

            for (let i = id * 2 - 2; i < id * 2; i++) {
                if (columns.length > i) {
                    columns[i].style.display = 'block';
                }
            }
        }
    }
};