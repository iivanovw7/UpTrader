import './sass/main.sass';
import './sass/sliders.sass';


let menuBtn = document.getElementById('menuBtn');


menuBtn.addEventListener('click', () => {
  let div = document.getElementById('drawer');

  if ( !div.innerHTML ) {
    div.innerHTML += 'handling menu action';
  } else div.innerHTML = ''


});


let btnForm = document.getElementsByClassName('btn_form');
let btnFormProject = document.getElementsByClassName('btn_form_project');


for (let i = 0; i < btnForm.length; i++) {
  btnForm[i].addEventListener('click', () => {

    if (btnForm[i].classList == 'btn_form') {
      btnForm[i].classList.add('active')
    } else  {
      btnForm[i].classList.remove('active')
    }


  });
}



for (let i = 0; i < btnFormProject.length; i++) {
  btnFormProject[i].addEventListener('click', () => {

    for (let i = 0; i < btnFormProject.length; i++) {
      btnFormProject[i].classList.remove('active')
    }

    if (btnFormProject[i].classList == 'btn_form_project') {
      console.log('adding')
      btnFormProject[i].classList.add('active')
    }


  });
}