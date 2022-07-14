const companyDropdown = document.querySelector(".company-menu-wrap");
const company = document.querySelector(".company");
const features = document.querySelector(".features");
const featuresDropdown = document.querySelector(".features-menu-wrap");
const featuresArrow = document.querySelector(".features span img");
const companyArrow = document.querySelector(".company span img");
const menu = document.querySelector('#mobile-menu');
const sideNav = document.querySelector(".side-nav");
const bodyTap = document.querySelector(".main");

company.addEventListener("click", () => {
    companyDropdown.classList.toggle("active");
    companyArrow.classList.toggle("is-active")
});

features.addEventListener("click", () => {
    featuresDropdown.classList.toggle("active");
    featuresArrow.classList.toggle("is-active")
});

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    sideNav.classList.toggle("pop-up");
});

bodyTap.addEventListener('click', function() {
		menu.classList.remove('is-active');
		sideNav.classList.remove("pop-up");
});

bodyTap.addEventListener('wheel', ()=>{
	menu.classList.remove('is-active');
		sideNav.classList.remove("pop-up");
});
