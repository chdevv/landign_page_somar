
const imgs = document.querySelectorAll(".loading")

function Observer(imgs){
  const windowHeight = window.innerHeight; 
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].getBoundingClientRect().top < (windowHeight+200) && imgs[i].dataset.src && !imgs[i].src) {
      imgs[i].src = imgs[i].dataset.src;
    }
  }
}

window.addEventListener("load", ()=>{
  Observer(imgs)
})

window.addEventListener("scroll", ()=>{
  Observer(imgs)
})
