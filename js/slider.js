        let slideImages = document.querySelectorAll('.slides img');
        let next = document.querySelector('.next');
        let prev = document.querySelector('.prev');
        let dots = document.querySelectorAll('.dot');
        let counter = 0;

        next.addEventListener('click', slideNext);
        function slideNext() {
            slideImages[counter].classList.remove('active');
            if (counter >= slideImages.length - 1) {
                counter = 0;
            } else {
                counter++;
            }
            slideImages[counter].classList.add('active');
            indicators();
        }

        prev.addEventListener('click', slidePrev);
        function slidePrev() {
            slideImages[counter].classList.remove('active');
            if (counter == 0) {
                counter = slideImages.length - 1;
            } else {
                counter--;
            }
            slideImages[counter].classList.add('active');
            indicators();
        }

        function autoSliding() {
            deletInterval = setInterval(timer, 3000);
            function timer() {
                slideNext();
                indicators();
            }
        }
        autoSliding();

        const container = document.querySelector('.slide-container');
        container.addEventListener('mouseover', function () {
            clearInterval(deletInterval);
        });

        container.addEventListener('mouseout', autoSliding);

        function indicators() {
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove('active');
            }
            dots[counter].classList.add('active');
        }

        function switchImage(currentImage) {
            const imageId = parseInt(currentImage.getAttribute('attr'));
            if (imageId === counter) return;

            slideImages[counter].classList.remove('active');
            counter = imageId;
            slideImages[counter].classList.add('active');
            indicators();
        }