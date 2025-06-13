function rand256() {
	return Math.floor(Math.random() * 256);
}

function expandBackground() {
	document.querySelector("body div:first-of-type").classList.add("background");
}

window.onload = () => {
	setInterval(() => {
		document.querySelector(".time").innerText = new Date().toLocaleTimeString("en-US") + ' PST';
		const color = `rgb(${rand256()}, ${rand256()}, ${rand256()})`;
		document.querySelector(".background")
				.setAttribute("style", `background-color: ${color}`)

		document.querySelector(".log").append(color);
	}, 1000);
}