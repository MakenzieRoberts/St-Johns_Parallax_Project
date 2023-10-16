// const body = document.body,
// 	jsScroll = document.getElementsByClassName("js-scroll")[0],
// 	height = jsScroll.getBoundingClientRect().height - 1,
// 	speed = 0.05;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
// 	offset += (window.scrollY - offset) * speed;

// 	var scroll = "translateY(-" + offset + "px) translateZ(0)";
// 	jsScroll.style.transform = scroll;

// 	let raf = requestAnimationFrame(smoothScroll);
// }
// smoothScroll();

/* DO NOT FORGET TO CHECK EXTERNAL SCRIPTS OF THIS PROJECT */

/* ———————————————————————————————————————————————————————————————————————————— */
// import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
// var mainElem = document.getElementById("main-scrollbar");

// Scrollbar.use(OverscrollPlugin);

// const options = {
// 	damping: 0.11,
// 	renderByPixels: !("ontouchstart" in document),
// };

// const scrollbar = [
// 	Scrollbar.init(mainElem, {
// 		...options,
// 		delegateTo: document,
// 	}),
// ];
/* ———————————————————————————————————————————————————————————————————————————— */

// Set the Scroll Page speed
// using https://github.com/gblazex/smoothscroll-for-websites
// SmoothScroll({ stepSize: 40 })

// Add some parallax
// ====================
// const heroImage = document.querySelector(".hero-image");
// const textEl = document.querySelector(".parallax");

// // Create the translate3d function
// function setTranslate(xPos, yPos, el) {
// 	el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
// }

// // Add event Listenter to Window
// window.addEventListener("DOMContentLoaded", scrollLoop, false);

// // Define position variables
// let xScrollPosition;
// let yScrollPosition;

// // Scroll function
// function scrollLoop() {
// 	xScrollPosition = window.pageXOffset;
// 	yScrollPosition = window.pageYOffset;

// 	// We only change the Y variable
// 	setTranslate(0, yScrollPosition * -0.2, heroImage);
// 	setTranslate(0, yScrollPosition * 0.1, textEl);

// 	// We use requestAnimationFrame to target the GPU instead of the CPU
// 	requestAnimationFrame(scrollLoop);
// }
