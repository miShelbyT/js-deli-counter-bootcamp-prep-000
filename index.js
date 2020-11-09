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

function currentLine (line) {
	if (line.length == 0) {
		return "The line is currently empty."
	}
	else {
		let lineList = ""
		for (let i = 0; i < line.length; i++) {
			lineList += `${i + 1}. ${line[i]}, `
		}
		return 'The line is currently: '.concat(lineList)
		}	
	}