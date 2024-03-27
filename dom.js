const slider = document.querySelector(".slider")
const img2= document.querySelector('.im2')
slider.addEventListener("input", ()=>{
  let sliderValue= slider.value;
  img2.style.clipPath= ` polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%) `
})