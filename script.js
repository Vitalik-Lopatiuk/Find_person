const btn_get = document.querySelector('.btn');
const conteiner = document.querySelector('.conteiner');

const message_box = {
	done: 'Все пройшло успішно',
	error: ' Сталася помилка , користувача не знайдено',
	load: 'Шукаю користувача '
}

function show_message(data) {
	const show = document.createElement('div')
	show.innerHTML = data
	conteiner.append(show)
	setTimeout(() => {
		show.innerHTML = ''
	}, 3000)
}

async function getFace() {

	const name = document.querySelector('.name').value;
	const age = document.querySelector('.age').value;
	await fetch('data.json')
		.then(response => response.json())
		.then(data => {

			if (data.persons.surname === name && data.persons.personage === age) {


				const face = document.createElement('img')
				const spinner = document.querySelector('.spinner')
				show_message(message_box.load)
				face.src = data.persons.photosrc;
				face.style.cssText = `width: 100%; height:
								  100%; max-width: 300px; 
								  animation: skale 1s linear;
								  `

				spinner.style.display = 'block'
				setTimeout(() => {
					conteiner.append(face)
					spinner.style.display = 'none'
					show_message(message_box.done)
				}, 2000)


			} else {
				show_message(message_box.error)
			}
		});
}



btn_get.addEventListener('click', getFace);