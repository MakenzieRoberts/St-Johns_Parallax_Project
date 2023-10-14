let layers = document.getElementsByClassName("parallax__layer");
console.log(layers);

for (let layer of layers) {
	console.log(layer);
}
// $parallax__layers: 6;

// @for $i from 0 through $parallax__layers {
//   $x: ($parallax__layers - $i) / 2;
//   .parallax__layer__#{$i}{
//      transform: translateZ(-100 * $x#{px}) scale($x + 1);
//   }
// }

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
