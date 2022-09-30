//move softwares
const sofwere1 = document.querySelector('.soft1');
const sofwereImg1 = document.querySelector('.soft1 p');

function onDrags({movementX,movementY}){
  
  let tela = window.getComputedStyle(sofwere1);
      let left = parseInt(tela.left);
      let top = parseInt(tela.top);
      sofwere1.style.left=`${left + movementX}px`,
      sofwere1.style.top=`${top + movementY}px`
}

sofwereImg1.addEventListener("mousedown",()=>{sofwereImg1.classList.add("active"),
sofwereImg1.addEventListener("mousemove",onDrags)}),
document.addEventListener("mouseup",()=>{sofwereImg1.classList.remove("active"),
sofwereImg1.removeEventListener("mousemove",onDrags)});


// --------------------------------------------------------------


const sofwere2 = document.querySelector('.soft2');
const sofwereImg2 = document.querySelector('.soft2 p');

function onDrags2({movementX,movementY}){
  
  let tela = window.getComputedStyle(sofwere2);
      let left = parseInt(tela.left);
      let top = parseInt(tela.top);
      sofwere2.style.left=`${left + movementX}px`,
      sofwere2.style.top=`${top + movementY}px`
}

sofwereImg2.addEventListener("mousedown",()=>{sofwereImg2.classList.add("active"),
sofwereImg2.addEventListener("mousemove",onDrags2)}),
document.addEventListener("mouseup",()=>{sofwereImg2.classList.remove("active"),
sofwereImg2.removeEventListener("mousemove",onDrags2)});


// --------------------------------------------------------------