/*jslint es6 */

let hatOrCat = function () {
    'use strict';

    const TOTAL_PICS = 30,
        IMG_PATH = 'assets/imgs/hats-cats/',
        CASES = [2, 0, 1, 1, 1, 2];

    function proschet(titles) {
        return function bindedProschet(amount) {
            return titles[
                (amount % 100 > 4 && amount % 100 < 20) ? 2 : CASES[(amount % 10 < 5) ? amount % 10 : 5]
                ];
        };
    }

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
        pics = [],
        currentUser = {},
        callBySex = 'отличил',
        url = window.location.search,
        inviteBtns = q('.js-invite-friends', 'all'),
        answerBtns = q('.js-answer', 'all');

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
            src: '3a.jpg',
            fullImg: '3b.jpg',
            value: 'cat'
        }, {
            src: '4a.jpg',
            fullImg: '4b.jpg',
            value: 'cat'
        }, {
            src: '5a.jpg',
            fullImg: '5b.jpg',
            value: 'cat'
        }, {
            src: '6a.jpg',
            fullImg: '6b.jpg',
            value: 'hat'
        }, {
            src: '7a.jpg',
            fullImg: '7b.jpg',
            value: 'hat'
        }, {
            src: '8a.jpg',
            fullImg: '8b.jpg',
            value: 'hat'
        }, {
            src: '9a.jpg',
            fullImg: '9b.jpg',
            value: 'hat'
        }, {
            src: '10a.jpg',
            fullImg: '10b.jpg',
            value: 'hat'
        }, {
            src: '11a.jpg',
            fullImg: '11b.jpg',
            value: 'hat'
        }, {
            src: '12a.jpg',
            fullImg: '12b.jpg',
            value: 'cat'
        }, {
            src: '13a.jpg',
            fullImg: '13b.jpg',
            value: 'hat'
        }, {
            src: '14a.jpg',
            fullImg: '14b.jpg',
            value: 'hat'
        }, {
            src: '15a.jpg',
            fullImg: '15b.jpg',
            value: 'hat'
        }, {
            src: '16a.jpg',
            fullImg: '16b.jpg',
            value: 'hat'
        }, {
            src: '17a.jpg',
            fullImg: '17b.jpg',
            value: 'hat'
        }, {
            src: '18a.jpg',
            fullImg: '18b.jpg',
            value: 'hat'
        }, {
            src: '19a.jpg',
            fullImg: '19b.jpg',
            value: 'hat'
        }, {
            src: '20a.jpg',
            fullImg: '20b.jpg',
            value: 'hat'
        }, {
            src: '21a.jpg',
            fullImg: '21b.jpg',
            value: 'hat'
        }, {
            src: '22a.jpg',
            fullImg: '22b.jpg',
            value: 'cat'
        }, {
            src: '23a.jpg',
            fullImg: '23b.jpg',
            value: 'cat'
        }, {
            src: '24a.jpg',
            fullImg: '24b.jpg',
            value: 'cat'
        }, {
            src: '25a.jpg',
            fullImg: '25b.jpg',
            value: 'cat'
        }, {
            src: '26a.jpg',
            fullImg: '26b.jpg',
            value: 'cat'
        }, {
            src: '27a.jpg',
            fullImg: '27b.jpg',
            value: 'cat'
        }, {
            src: '28a.jpg',
            fullImg: '28b.jpg',
            value: 'cat'
        }, {
            src: '29a.jpg',
            fullImg: '29b.jpg',
            value: 'cat'
        }, {
            src: '30a.jpg',
            fullImg: '30b.jpg',
            value: 'cat'
        }, {
            src: '31a.jpg',
            fullImg: '31b.jpg',
            value: 'cat'
        }, {
            src: '32a.jpg',
            fullImg: '32b.jpg',
            value: 'cat'
        }, {
            src: '33a.jpg',
            fullImg: '33b.jpg',
            value: 'cat'
        }, {
            src: '34a.jpg',
            fullImg: '34b.jpg',
            value: 'cat'
        }, {
            src: '35a.jpg',
            fullImg: '35b.jpg',
            value: 'cat'
        }, {
            src: '36a.jpg',
            fullImg: '36b.jpg',
            value: 'cat'
        }, {
            src: '37a.jpg',
            fullImg: '37b.jpg',
            value: 'cat'
        }, {
            src: '38a.jpg',
            fullImg: '38b.jpg',
            value: 'cat'
        }, {
            src: '39a.jpg',
            fullImg: '39b.jpg',
            value: 'cat'
        }, {
            src: '40a.jpg',
            fullImg: '40b.jpg',
            value: 'cat'
        }, {
            src: '41a.jpg',
            fullImg: '41b.jpg',
            value: 'cat'
        }, {
            src: '42a.jpg',
            fullImg: '42b.jpg',
            value: 'cat'
        }, {
            src: '43a.jpg',
            fullImg: '43b.jpg',
            value: 'hat'
        }, {
            src: '44a.jpg',
            fullImg: '44b.jpg',
            value: 'hat'
        }, {
            src: '45a.jpg',
            fullImg: '45b.jpg',
            value: 'hat'
        }, {
            src: '46a.jpg',
            fullImg: '46b.jpg',
            value: 'cat'
        }, {
            src: '47a.jpg',
            fullImg: '47b.jpg',
            value: 'cat'
        }, {
            src: '48a.jpg',
            fullImg: '48b.jpg',
            value: 'cat'
        }, {
            src: '49a.jpg',
            fullImg: '49b.jpg',
            value: 'cat'
        }, {
            src: '50a.jpg',
            fullImg: '50b.jpg',
            value: 'cat'
        }];

        scoreElem.innerHTML = scoreValue;
        pics = shuffleArray(allPics).slice(0, TOTAL_PICS);
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

        q('.js-final-score-value').innerHTML = scoreValue;

        function getParams(url) {
            let params = [];
            let urlArr = url.split('&');
            urlArr.forEach(function (e) {
                let genArr = e.split('=');
                params[genArr[0]] = genArr[1];
            });

            return params;
        }

        let urlParams = getParams(url);

        console.info('urlParams', urlParams);

        // VK.api('secure.addAppEvent', {activity_id: '2', value: scoreValue}, function (data2) {
        //     console.log(data2);
        // });


        if (scoreValue <= Math.floor(pics.length * 0.3)) {
            q('.js-final-3').classList.remove('is-hidden');
        } else if (scoreValue <= Math.floor(pics.length * 0.9)) {
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

    let answer = function () {
        if (answerResultElem.classList.contains('answered')) {
            return;
        }

        answerResultElem.classList.add('answered');
        gamePic.style.backgroundImage = 'url(' + IMG_PATH + pics[currentPic].fullImg + ')';

        if (pics[currentPic].value === this.value.toLowerCase()) {
            answerResultElem.querySelector('.success').classList.remove('is-hidden');
            toggleElement(scoreWrap);
            toggleElement(nextButton);

            nextTimeout = setTimeout(next, 2000);
        } else {
            answerResultElem.querySelector('.failure').classList.remove('is-hidden');
            finishTimeout = setTimeout(finish, 2000);
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

    let inviteFriends = function () {
        VK.callMethod("showInviteBox");
    };

    VK.api("users.get", {'fields': 'sex'}, function (data) {
        currentUser = data.response[0];
        if (currentUser.sex == 1) {
            callBySex = 'отличила';
        }
    });

    let shareResult = function () {
        VK.api("wall.post", {
            message: 'Я ' + callBySex + ' ' + scoreValue + ' ' + proschet(['кота', 'котов', 'котов'])([scoreValue]) + ' от шапки в игре Шапка или Кот! vk.com/app3732547',
            attachment: 'photo-139010877_456239018'
            // attachment: 'photo-139010877_456239017'
        });
    };


    // Event listeners
    q('.js-start').addEventListener('click', start);
    q('.js-restart').addEventListener('click', restart);
    q('.js-share-result').addEventListener('click', shareResult);
    q('.js-next').addEventListener('click', next);

    for (let i = 0; i < inviteBtns.length; i++) {
        inviteBtns[i].addEventListener('click', inviteFriends);
    }
    for (let i = 0; i < inviteBtns.length; i++) {
        answerBtns[i].addEventListener('click', answer);
    }
}();


// VK.init(function () {
//     console.log('VK connected');
// }, function () {
//     console.warn('VK loading failed');
// }, '5.62');


// var obj = {
//     api_url: "https://api.vk.com/api.php",
//     access_token: "aad4d29281123adb0c13dda1db8dbcbf83ac0c0f06dab1aabe19779bf169c17d32bc4d4b0c76582896ab2",
//     ad_info: "ElsdCQNfQFZkAgNNRARQBHR4FAsmMQxVUUZGNgBQbwYfQyQrWQA",
//     ads_app_id: "3732547_108c86906535bbf73a",
//     api_id: "3732547",
//     api_settings: "2106625",
//     auth_key: "23a5f33167c722681dd72bae7422d221",
//     group_id: "0",
//     hash: "",
//     is_app_user: "1",
//     is_secure: "1",
//     language: "0",
//     lc_name: "4e37e967",
//     parent_language: "0",
//     referrer: "unknown",
//     secret: "8c2dd5700f",
//     sid: "e2c300bef136de4c85548416031ac220b51925ea2f20ceaa421c6d8bd14d21b19de73f76cab14dd33c716",
//     user_id: "2313077",
//     viewer_id: "2313077",
//     viewer_type: "2"
// };
//
// function server() {
//     xmlhttp = new XMLHttpRequest();
//     xmlhttp.open("GET", "http://localhost:8001/getstring" + obj, true);
//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//             string = xmlhttp.responseText;
//         }
//     };
//     xmlhttp.send();
// }
//
//
// console.log('obj', obj);
