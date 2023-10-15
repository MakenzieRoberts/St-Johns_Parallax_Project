let layers = document.getElementsByClassName("parallax__layer");
const translateTarget = document.querySelectorAll(".scroll");
console.log(layers);

for (let layer of layers) {
	console.log(layer);
}

let numLayers = 6;

for (let i = 0; i < numLayers; i++) {
	let x = (layers.length - i) / 2;
	let currentLayer = document.querySelector(`.parallax__layer__${i}`);
	// console.log(`.parallax__layer_${i}`);
	// console.log(currentLayer);
	// currentLayer.style.transform = `translateZ(-100 * ${x}px) scale(${x + 1});`;
	currentLayer.style.transform = ` translateZ(${-100 * x}px ) scale(${x + 1})`;
	currentLayer.style.accentColor = "red";
	console.log("layers[i] style:", layers[i].style);
}
// style.transform = ` translateY(${x * 0.25}px ) `;

// var objTable = document.getElementById("parallax-container");

window.addEventListener(
	"scroll",
	function (e) {
		console.log("scrolling");
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
