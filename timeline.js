function getTemplate(templatePrefix) {
	return document.getElementById(templatePrefix + '-template').innerHTML
}

window.onload = function() {
	const menu = document.querySelector('#timeline menu');
	if (window.innerWidth <= 768) {
		menu.classList.add('hidden');
	}

	const body = document.getElementById('events');
	const sectionTemplate = Handlebars.compile(getTemplate('section'));
	const menuItemTemplate = Handlebars.compile(getTemplate('menu-item'));
	Handlebars.registerPartial('card', getTemplate('card'));

	const directoryList = ['2022'];
	directoryList.forEach((directory) => {
	return fetch('https://www.yesatgoogle.com/' + directory + '/entries.json')
		.then(response => response.json())
		.then(data => {
			menu.innerHTML += menuItemTemplate({'listId': data.listId, 'title': data.title});
			body.innerHTML += sectionTemplate(data);
		});
	})
}

function openModal(cardContent) {
	document.getElementById('timeline').setAttribute('class', 'disabled');
	const modal = document.getElementById('modal');
	modal.append(cardContent.parentElement.cloneNode(true));
	modal.lastElementChild.firstElementChild.removeAttribute('onclick');
	modal.removeAttribute('class');
}

function closeModal() {
	const modal = document.getElementById('modal');
	modal.setAttribute('class', 'hidden');
	modal.removeChild(modal.lastElementChild);
	document.getElementById('timeline').removeAttribute('class');
}

function toggleMenu() {
	document.querySelector('menu').classList.toggle('hidden');
}