//

//
// let imeGrada = prompt("Unesite Ime grada");

// document.getElementById("prognoza").innerHTML = imeGrada;

//

//
// function imeGrada() {
// 	let grad = prompt("Ime Grada?");
// }

var gradovi = [];

document
	.getElementById("dodajGradButton")
	.addEventListener("click", function () {
		let grad = prompt("Ime Grada?");
		grad = grad.split(" ");

		var privremeniGrad = {
			ime: grad[0],
			temperatura: grad[1],
		};
		gradovi.push(privremeniGrad);
		console.log(gradovi);
	});

document.getElementById("prikaziButton").addEventListener("click", function () {
	document.getElementById("prognoza").innerHTML += "";
	for (var grad in gradovi) {
		document.getElementById("prognoza").innerHTML +=
			gradovi[grad].ime + " " + gradovi[grad].temperatura;
	}
});
