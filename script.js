//

//

var gradovi = [
	{
		ime: "Beograd",
		temperatura: -2,
		padavine: "sneg", // kisa, seng, bez padavina
	},
	{
		ime: "Subotica",
		temperatura: -4,
		padavine: "Bez padavina",
	},
];

//

for (var grad in gradovi) {
	let paragraf = document.createElement("p");
	let prognoza = gradovi[grad];
	let temperatura =
		prognoza["ime"] + " " + prognoza["temperatura"] + prognoza["padavine"];
	document.getElementById("prognoza").appendChild(paragraf).append(temperatura);
}
