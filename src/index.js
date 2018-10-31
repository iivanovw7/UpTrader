import './sass/main.sass';
import './sass/sliders.sass';
import './sass/textInput.sass';

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

window.addEventListener("load", function() {
  document.getElementById("form").addEventListener("submit", function(event) {
    event.target.checkValidity();
    event.preventDefault(); // Prevent form submission and contact with server
    event.stopPropagation();
  }, false);
}, false);

let selDeadline = document.getElementById("selDeadline");
let selBudget = document.getElementById("selBudget");

//setting current slider value to styles prop
selDeadline.addEventListener("input", function() {
  selDeadline.style.setProperty("--val", + selDeadline.value);
}, false);

selBudget.addEventListener("input", function() {
  selBudget.style.setProperty("--val", + selBudget.value);
}, false);

//budget selector
let selBudget_slider = document.getElementById("selBudget");
let selBudget_output = document.getElementById("selBudget_result");
selBudget_output.innerHTML = "до 1 млн";

selBudget_slider.oninput = function() {
  let i = this.value;
  console.log(i);

  switch(true) {
    case (i == 1):
      selBudget_output.innerHTML = "до 1 млн";
      break;
    case (i == 2):
      selBudget_output.innerHTML = "1-5 млн";
      break;
    case (i == 3):
      selBudget_output.innerHTML = "> 5 млн";
      break;
    default:
      selBudget_output.innerHTML = "до 1 млн";
  }

};

//deadline selector
let selDeadline_slider = document.getElementById("selDeadline");
let selDeadline_output = document.getElementById("selDeadline_result");

function ageSp(index) {
  let text = 'месяцев';

  ((index % 100) <= 20) && (index % 100) >= 5 ? (text = 'месяцев') :
    (index % 10) == 1 ? (text = 'месяц') :
      ((index % 10) >= 2) && ((index % 10) <= 4) ? (text = 'месяца') :
        (text = 'месяцев');

  return text;
};

selDeadline_output.innerHTML = selDeadline_slider.value + " " + ageSp(selDeadline_slider.value);

selDeadline_slider.oninput = function() {
  selDeadline_output.innerHTML = this.value + " " + ageSp(this.value);
};



let projectDesc = document.getElementById("projectDesc");
let projectDesc_label = document.getElementById("projectDesc_label");
let text = document.getElementById("projectDesc").placeholder;
projectDesc_label.innerHTML = text;

projectDesc.oninput = function() {

  if (projectDesc.value == "") {
    document.getElementById("projectDesc_label").style.display = "none";
  } else {
    document.getElementById("projectDesc_label").style.display = "block";
  }

};