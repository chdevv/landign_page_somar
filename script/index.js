const menu = document.querySelector(".ul-header")
const li = document.querySelectorAll(".ul-header")
const menubtn = document.querySelector(".btn-menu")

menubtn.addEventListener("click", () => {
  if (!menu.classList.contains('open')) {
    menu.classList.remove('close')
    menu.classList.add('open')
    menubtn.style.transform = 'rotate(180deg)'
    menubtn.src = "assets/menu/fechar.svg"
    menubtn.classList.remove('uil-bars')
    menubtn.classList.add('uil-times')
  } else {
    menu.classList.remove('open')
    menu.classList.add('close')
    menubtn.style.transform = 'rotate(0deg)'
    menubtn.src = "assets/menu/menu.svg"
    menubtn.classList.add('uil-bars')
    menubtn.classList.remove('uil-times')
  }
})

li.forEach((li) => {
  li.addEventListener("click",()=>{
    menu.classList.remove('open')
    menu.classList.add('close')
    menubtn.src = "assets/menu/menu.svg"
    menubtn.style.transform = 'rotate(0deg)'
    menubtn.classList.add('uil-bars')
    menubtn.classList.remove('uil-times')
  })
})


window.addEventListener("resize", function() {
  if (window.matchMedia("(orientation: landscape)").matches ){
    menu.classList.remove('close')
    menu.classList.remove('open')
    menubtn.style.transform = 'rotate(0deg)'
    menubtn.src = "assets/menu/menu.svg"
  }
})