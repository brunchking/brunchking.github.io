document.getElementById("Celsius").addEventListener("input", function (e) {
	let x = e.target.value;
	document.getElementById("FahrenheitOutput").innerHTML = x * (9 / 5) + 32;
});
document.getElementById("Fahrenheit").addEventListener("input", function (e) {
	let x = e.target.value;
	document.getElementById("CelsiustOutput").innerHTML = (x - 32) * 5 / 9;;
});

function goBack() {
	window.history.back();
}