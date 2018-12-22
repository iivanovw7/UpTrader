import './sass/main.sass';
import { TweenMax, TimelineLite } from "gsap/TweenMax";

let btn_trading = document.getElementById('btn_trading');
let landing = document.getElementById("landing");
let btn_wrapper = document.getElementsByClassName('btn_wrapper');
let mobileElements = document.getElementsByClassName('mobile_view');
let desktopElements = document.getElementsByClassName('desktop_view');
let navBlock = document.getElementById('navBlock');
let mainWrapper = document.getElementById("main_wrapper");

function mobile(){
  return (
    landing.offsetWidth < 600
  )
}

function renderIfMobile() {

    document.getElementById("page_content").style.width = (
      mobile() ? '100%' : btn_wrapper[0].offsetWidth * 3
    );


    if(!mobile()) {
      for (let element of mobileElements) {
        element.style.display = 'none'
      }
    }

    if(mobile()) {
      for (let element of desktopElements) {
        element.style.display = 'none'
      }

      mainWrapper.style.background = 'url(img/_/_/src/img/bg.jpg) center center / 900px 100%';
    }

}

function getArrow(button) {

  return (
    button.querySelector('.arrow')
  )

}

function pageSelected() {

  let tl = new TimelineLite();


  if(!mobile()) {

    let stage1 = document.getElementById("landing"),
      moving = document.getElementById("navBlock");


    document.body.style.overflowY = 'hidden';


    tl.to(moving, 0.5, {y: -(document.getElementById('btn_trading_text').offsetTop - 30), opacity: 0.5 });

    tl.to(stage1, 0.3, {opacity: 0});

    tl.to(stage1, 0.01, {display: 'none'});

  } else {

    let content = document.getElementById("trading_content_mobile");
    let newContent = document.getElementById('page_content');
    let oldContent = document.getElementById('trading');
    let arrow = getArrow(btn_trading);



    document.body.style.overflowY = 'scroll';

    if(arrow.classList.contains('opened')) {

      TweenMax.to(getArrow(btn_trading), 1, {rotation:0});

      content.style.overflow = 'hidden';
      content.style.paddingBottom = '0';
      mainWrapper.style.height = '100%';
      mainWrapper.style.background = 'url(img/_/_/src/img/bg.jpg) center center / 900px 100%';
      //background: url(src/img/photo.png) bottom center / 100% 200px no-repeat;

      let oldheight = content.offsetHeight;

      oldContent.appendChild(newContent);

      TweenMax.fromTo(content, 0.5, { height: oldheight }, { height: content.offsetHeight, clearProps: 'height' });

      arrow.classList.remove('opened');
      return

    }

    TweenMax.to(getArrow(btn_trading), 1, {rotation:180});

    content.style.overflow = 'hidden';
    content.style.paddingBottom = '200px';

    mainWrapper.style.height = navBlock.offsetHeight * 4.3;
    mainWrapper.style.background = 'url(src/img/trading_mobile.jpg)';
    content.style.background = 'url(src/img/photo.png) bottom center / 100% 200px no-repeat';


    let oldheight = content.offsetHeight;
    content.appendChild(newContent);

    TweenMax.fromTo(content, 0.5, { height: oldheight }, { height: content.offsetHeight, clearProps: 'height' });


    arrow.classList.add('opened')

  }

}


renderIfMobile();


btn_trading.addEventListener('click', () => {

  pageSelected()

});



