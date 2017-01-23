/*jslint es6 */

let hatOrCat = (function () {
    'use strict';

    const TOTAL_PICS = 5,
          IMG_PATH = 'assets/imgs/hats-cats/';

    let q = function (selector, all) {
        return all ? document.querySelectorAll(selector) : document.querySelector(selector);
    };

    let toggleElement = function (elem) {
        elem.classList.toggle('is-hidden');
    };

    let scoreValue = 0,
        scoreElem = q('.js-score-value'),
        scoreWrap = q('.js-score-block'),
        answerResultElem = q('.js-answer-result'),
        totalPicsElem = q('.js-total-pics'),
        nextButton = q('.js-next'),
        gamePic = q('.js-pic'),
        nextTimeout = null,
        finishTimeout = null,
        currentPic = -1,
        pics = [];

    let init = function () {
        scoreValue = 0;
        currentPic = -1;
        totalPicsElem.innerText = TOTAL_PICS;

        let allPics = [{
            src: '1a.jpg',
            fullImg: '1b.jpg',
            value: 'cat'
        }, {
            src: '2a.jpg',
            fullImg: '2b.jpg',
            value: 'hat'
        }, {
            src: '1a.jpg',
            fullImg: '1b.jpg',
            value: 'cat'
        }, {
            src: '2a.jpg',
            fullImg: '2b.jpg',
            value: 'hat'
        }, {
            src: '1a.jpg',
            fullImg: '1b.jpg',
            value: 'cat'
        }, {
            src: '2a.jpg',
            fullImg: '2b.jpg',
            value: 'hat'
        }, {
            src: '1a.jpg',
            fullImg: '1b.jpg',
            value: 'cat'
        }, {
            src: '2a.jpg',
            fullImg: '2b.jpg',
            value: 'hat'
        }, {
            src: '1a.jpg',
            fullImg: '1b.jpg',
            value: 'cat'
        }, {
            src: '2a.jpg',
            fullImg: '2b.jpg',
            value: 'hat'
        }, {
            src: '1a.jpg',
            fullImg: '1b.jpg',
            value: 'cat'
        }, {
            src: '2a.jpg',
            fullImg: '2b.jpg',
            value: 'hat'
        }, {
            src: '1a.jpg',
            fullImg: '1b.jpg',
            value: 'cat'
        }, {
            src: '2a.jpg',
            fullImg: '2b.jpg',
            value: 'hat'
        }, {
            src: '1a.jpg',
            fullImg: '1b.jpg',
            value: 'cat'
        }, {
            src: '2a.jpg',
            fullImg: '2b.jpg',
            value: 'hat'
        }, {
            src: '1a.jpg',
            fullImg: '1b.jpg',
            value: 'cat'
        }, {
            src: '2a.jpg',
            fullImg: '2b.jpg',
            value: 'hat'
        }, {
            src: '1a.jpg',
            fullImg: '1b.jpg',
            value: 'cat'
        }, {
            src: '2a.jpg',
            fullImg: '2b.jpg',
            value: 'hat'
        }, {
            src: '1a.jpg',
            fullImg: '1b.jpg',
            value: 'cat'
        }, {
            src: '2a.jpg',
            fullImg: '2b.jpg',
            value: 'hat'
        }, {
            src: '1a.jpg',
            fullImg: '1b.jpg',
            value: 'cat'
        }, {
            src: '2a.jpg',
            fullImg: '2b.jpg',
            value: 'hat'
        }, {
            src: '1a.jpg',
            fullImg: '1b.jpg',
            value: 'cat'
        }, {
            src: '2a.jpg',
            fullImg: '2b.jpg',
            value: 'hat'
        }];

        scoreElem.innerHTML = scoreValue;
        pics = getSlides(shuffleArray(allPics));
        loadNextImg();
    };

    let shuffleArray = function (array) {
        for (let i = array.length - 1; i > 0; i -= 1) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    let getSlides = function (array) {
        let clearPics = [];

        for (let i = 0; i < TOTAL_PICS; i += 1) {
            clearPics.push(array[i]);
        }
        return clearPics;
    };

    let loadNextImg = function () {
        let imageSrc = new Image(),
            imageFull = new Image();

        imageSrc.src = IMG_PATH + pics[currentPic + 1].src;
        imageFull.src = IMG_PATH + pics[currentPic + 1].fullImg;
    };

    init();

    let next = function () {
        clearTimeout(nextTimeout);
        currentPic += 1;
        scoreElem.innerHTML = scoreValue = currentPic;
        nextButton.classList.add('is-hidden');
        scoreWrap.classList.remove('is-hidden');
        answerResultElem.classList.remove('answered');
        answerResultElem.querySelector('.success').classList.add('is-hidden');
        answerResultElem.querySelector('.failure').classList.add('is-hidden');

        if (currentPic === pics.length) {
            finish();
            return;
        } else if (currentPic + 1 < pics.length) {
            loadNextImg();
        }

        gamePic.style.backgroundImage = 'url(' + IMG_PATH + pics[currentPic].src + ')';
    };

    let finish = function () {
        clearTimeout(finishTimeout);
        changeStage('final-stage');
        q('.logo').classList.remove('small');

        if (scoreValue <= Math.floor(pics.length * 0.3)) {
            q('.js-final-3').classList.remove('is-hidden');
        } else if (scoreValue <= Math.floor(pics.length * 0.8)) {
            q('.js-final-2').classList.remove('is-hidden');
        } else {
            q('.js-final-1').classList.remove('is-hidden');
        }
    };

    let changeStage = function (nextStage) {
       let all = [].slice.apply(q('.stage', 'all'));
       for (let i = 0; i < all.length; i += 1) {
           let elemClasses = all[i].classList;
           elemClasses.contains(nextStage) ? elemClasses.add('is-active') : elemClasses.remove('is-active');
       }
    };

    let answer = function (value) {
        if (answerResultElem.classList.contains('answered')) {
            return;
        }

        answerResultElem.classList.add('answered');

        gamePic.style.backgroundImage = 'url(' + IMG_PATH + pics[currentPic].fullImg + ')';

        if (pics[currentPic].value === value.toLowerCase()) {
            answerResultElem.querySelector('.success').classList.remove('is-hidden');
            toggleElement(scoreWrap);
            toggleElement(nextButton);

            nextTimeout = setTimeout(function () {
                next();
            }, 2000);

        } else {
            answerResultElem.querySelector('.failure').classList.remove('is-hidden');
            finishTimeout = setTimeout(function () {
                finish();
            }, 2000);
        }
    };

    let start = function () {
        changeStage('game-stage');
        q('.js-final-1').classList.add('is-hidden');
        q('.js-final-2').classList.add('is-hidden');
        q('.js-final-3').classList.add('is-hidden');
        q('.logo').classList.add('small');

        next();
    };

    let restart = function () {
        init();
        start();
    };

    return {
        start: start,
        restart: restart,
        answer: answer,
        next: next
    };
})();