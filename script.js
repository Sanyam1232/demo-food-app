let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}
const toTop=document.querySelector(".scroll-top");
window.addEventListener("scroll", () =>
{
  if(window.pageYOffset>60)
  {
    toTop.classList.add("active");
  }
  else
  {
    toTop.classList.remove("active")
  }
})


function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();
