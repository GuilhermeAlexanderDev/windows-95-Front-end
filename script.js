const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.openMenu');

const programaMenu = document.querySelector('.sofwere1');
const cmd = document.querySelector('.cmd')
const janelaCmd = document.querySelector(".confCmd");

const exit = document.querySelector('.exit');


menu.addEventListener('click', () => {
  if(menuOpen.classList.contains('open')){
    menuOpen.classList.remove('open')
  }else{
    menuOpen.classList.add('open')
  }
  
})

programaMenu.addEventListener('click', () => {
  menuOpen.classList.remove('open');

  if(cmd.classList.contains('active')){
    cmd.classList.remove('active')
  }else{
    cmd.classList.add('active')
  }
})

exit.addEventListener('click',() => {
  cmd.classList.remove('active')
})

// function onDrag({movementX,movementY}){
//   let getStyle = window.getComputedStyle(cmd);
//   let left = parseInt(getStyle.left);
//   let top = parseInt(getStyle.top);
//   console.log(e)
//   cmd.style.left = `${left + movementX}`
//   cmd.style.top = `${top + movementY}`
// }

// janelaCmd.addEventListener('mousedown',()=>{
//   janelaCmd.addEventListener('mousemove',onDrag)
// })

//move element
function onDrag({movementX:e,movementY:r}){
  let t=window.getComputedStyle(cmd),
      a=parseInt(t.left),o=parseInt(t.top);
      cmd.style.left=`${a+e}px`,
      cmd.style.top=`${o+r}px`
}
janelaCmd.addEventListener("mousedown",()=>{janelaCmd.classList.add("active"),janelaCmd.addEventListener("mousemove",onDrag)}),
document.addEventListener("mouseup",()=>{janelaCmd.classList.remove("active"),janelaCmd.removeEventListener("mousemove",onDrag)});

