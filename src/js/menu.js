window.addEventListener("DOMContentLoaded",()=>{
  const navigation = document.getElementById("js-navigation");
  const menuButton = document.getElementById("js-menu-button");
  menuButton.addEventListener("click",()=>{
  
    navigation.classList.toggle("mobile-navigation--active");
    document.querySelector("body").classList.toggle("no-vertical-overflow");
  })
})