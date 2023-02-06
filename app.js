var note1 = 0;
var note2 = 0;
var note3 = 0;
var average = 0;

function calculate(note1, note2, note3) {
	average = (note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4);
	return average;
}


function calculateNote(note1, note2) {
	var note = 0;
	note = 5-average;
	return note;
}


function determinateState(note1, note2, note3) {
	var state = "";
	average = calculate(note1, note2, note3);
	if (average <= 2) {
		state = "Perdió la asignatura\n";
	} else if (average > 2 && average <= 3.4) {
		state = "Perdió la asignatura pero tiene oportunidad de recuperar\n";
	} else if (average > 3.4 && average <= 4.5) {
		state = "Aprobó de manera satisfactoria\n";
	} else if (average > 4.5 && average <= 5) {
		state = "Aprobó y será reconocido por la plataforma como un aprendiz excelente\n";
	}
	return state;
}


function showResult(note1, note2, note3) {
	var result = "";
	result = "La nota  del aprendiz es: " + calculate(note1, note2, note3) + "\n";
	result += "";
	result += "El estado del aprendiz es: " + determinateState(note1, note2, note3) + "\n";
	result += "";
	result += "La nota que debe sacar el aprendiz en la tercera nota es: " + calculateNote(note1, note2) + "\n";
	return result;
}


function main() {
	note1 = 4;
	note2 = 4;
	note3 = 1;
	console.log(showResult(note1, note2, note3));
}


main();

