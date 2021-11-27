new fullpage('#fullpage', {
    //options here
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    menu: '#myMenu',
    // autoScrolling: true,
    // scrollHorizontally: true,
    css3: true,
    scrollingSpeed: 700,
    navigation: true,
    navigationTooltips: ['firstSlide', 'secondSlide'],
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
});

//methods
fullpage_api.setAllowScrolling(true);

window.onload = function() {
    let images = ["../img/1.jpg", "../img/2.jpg", "../img/3.jpg", "../img/4.jpg", ];
    let ban = document.querySelectorAll("#ban");
    ban[0].style.backgroundImage = `url('${images[0]}')`
    ban[1].style.backgroundImage = `url('${images[1]}')`
    ban[2].style.backgroundImage = `url('${images[2]}')`
    ban[2].style.backgroundPosition = `center bottom`
    ban[3].style.backgroundImage = `url('${images[3]}')`
    ban[3].style.backgroundPosition = `top center`
}

let btn = document.querySelectorAll(".button");
let ntf = document.querySelector(".notification");
let delBtn = document.querySelector(".delete");
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        ntf.style.transition = "all 0.3s"
        ntf.style.display = "block"
    }
}
delBtn.onclick = function() {
    ntf.style.transition = "all 0.3s"
    ntf.style.display = "none"
}