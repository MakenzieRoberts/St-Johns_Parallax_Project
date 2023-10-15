const translateTarget = document.querySelectorAll(".scroll");
const scaleTarget = document.querySelectorAll(".scale");
const zTarget = document.querySelectorAll(".z");
console.log("parallaxFinetune.js Running...");

// window.addEventListener("scroll", function (e) {
// 	console.log("parallaxFinetune.js SCROLL EVENT...");
// 	console.log(e);
// 	var index = 0,
// 		length = translateTarget.length;
// 	for (index; index < length; index++) {
// 		var pos = window.pageYOffset * translateTarget[index].dataset.rate;

// 		if (translateTarget[index].dataset.direction === "vertical") {
// 			translateTarget[index].style.transform = "translate3d(0px," + pos + "px, 0px)";
// 		} else {
// 			var posX = window.pageYOffset * translateTarget[index].dataset.ratex;
// 			var posY = window.pageYOffset * translateTarget[index].dataset.ratey;

// 			translateTarget[index].style.transform =
// 				"translate3d(" + posX + "px, " + posY + "px, 0px)";
// 		}
// 	}
// });

var objTable = document.getElementById("parallax-container");

window.addEventListener(
	"scroll",
	function (e) {
		translateOnScroll(e);
		// scaleOnScroll(e);
		// zOnScroll(e);
	},
	false
);

function translateOnScroll(e) {
	console.log("translateOnScroll parallaxFinetune.js SCROLL EVENT...");
	console.log(e);
	var i = 0,
		length = translateTarget.length;
	for (i; i < length; i++) {
		applyTransition(translateTarget[i]);
		// Dividing by 1000 gives more control over speed
		var pos = (window.pageYOffset * translateTarget[i].dataset.rate) / 1000;
		if (translateTarget[i].dataset.direction === "vertical") {
			translateTarget[i].style.transform = `translate3d(0px, ${pos}px, 0px)`;
		}
		if (translateTarget[i].dataset.direction === "horizontal") {
			// Dividing by 1000 gives more control over speed
			var posX = (window.pageYOffset * translateTarget[i].dataset.ratex) / 1000;
			var posY = (window.pageYOffset * translateTarget[i].dataset.ratey) / 1000;
			translateTarget[i].style.transform =
				"translate3d(" + posX + "px, " + posY + `px, 0px)`;
		}
		console.log(translateTarget[i].dataset);
	}
}
// function zOnScroll(e) {
// 	console.log(e);
// 	var i = 0,
// 		length = translateTarget.length;
// 	for (i; i < length; i++) {
// 		// applyTransition(translateTarget[i]);
// 		// Dividing by 1000 gives more control over speed
// 		var pos = (window.pageYOffset * translateTarget[i].dataset.rate) / 10000;
// 		// console.log(pos);

// 		translateTarget[i].style.transform = `translateZ(${pos}px)`;
// 	}
// }
// function scaleOnScroll(e) {
// 	var i = 0,
// 		length = scaleTarget.length;
// 	for (i; i < length; i++) {
// 		applyTransition(scaleTarget[i]);
// 		// Dividing by 1000 gives more control over speed
// 		var pos = window.pageYOffset * scaleTarget[i].dataset.rate;
// 		console.log(pos);

// 		scaleTarget[i].style.filter = `scale(${pos})`;
// 	}
// }

function applyTransition(parallaxLayer) {
	// parallaxLayer.style.transition = "all 0.5s";
	// parallaxLayer.style.transitionDelay = "0ms";
}

// If a performance increase is needed, check out this mdn doc:
//      https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event

/* ————————————————————————————— Old Func w/ zpos ————————————————————————————— */

// function translateOnScroll(e) {
// 	console.log("translateOnScroll parallaxFinetune.js SCROLL EVENT...");
// 	console.log(e);
// 	var i = 0,
// 		length = translateTarget.length;
// 	for (i; i < length; i++) {
// 		applyTransition(translateTarget[i]);
// 		// Dividing by 1000 gives more control over speed
// 		var pos = (window.pageYOffset * translateTarget[i].dataset.rate) / 1000;
// 		let zPos = (window.pageYOffset * translateTarget[i].dataset.zpos) / 1000;
// 		console.log(zPos);
// 		// console.log(pos);
// 		if (translateTarget[i].dataset.direction === "vertical") {
// 			translateTarget[
// 				i
// 			].style.transform = `translate3d(0px, ${pos}px, ${zPos}px)`;
// 		}
// 		if (translateTarget[i].dataset.direction === "horizontal") {
// 			// Dividing by 1000 gives more control over speed
// 			var posX = (window.pageYOffset * translateTarget[i].dataset.ratex) / 1000;
// 			var posY = (window.pageYOffset * translateTarget[i].dataset.ratey) / 1000;
// 			// console.log(posX, posY);
// 			translateTarget[i].style.transform =
// 				"translate3d(" + posX + "px, " + posY + `px, 0px)`;
// 		}
// 		console.log(translateTarget[i].dataset);

// 		// let zPos = window.pageYOffset * translateTarget[i].dataset.zpos;
// 		// translateTarget[i].style.transform =
// 		// 	"translate3d(" + posX + "px, " + posY + `px, ${zPos}px)`;
// 	}
// }
