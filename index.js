function takeANumber(line, newPerson) {
	line.push(newPerson)
	return `Welcome, ${newPerson}. You are number ${line.length} in line.`
}

function nowServing (katzDeliLine) {
	if (katzDeliLine.length > 0) {
		return `Currently serving ${katzDeliLine.shift()}.`
		
	}
	else {
		return "There is nobody waiting to be served!"
	}
}

function currentLine (line, i) {
	if (line.length == 0) {
		return "The line is currently empty."
	}
	else {
		return `The line is currently: ${line.join(", ")}`
		}	
	}