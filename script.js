const btn_get = document.querySelector('.btn');
const conteiner = document.querySelector('.conteiner');

const message_box = {
	done: 'Все пройшло успішно',
	error: ' Сталася помилка , користувача не знайдено',
	load: 'Шукаю користувача '
}

function show_message(data) {
	const show_message = document.querySelector('.show-message')
	show_message.innerHTML = data
	setTimeout(() => {
		show_message.innerHTML = ''
	}, 3000)
}

async function getFace() {

	const name = document.querySelector('.name').value;
	const age = document.querySelector('.age').value;
	await fetch('data.json')
		.then(response => response.json())
		.then(data => {

			data.posts.forEach(obj => {

				if (obj.name === name && obj.age === age) {


					const face_show = document.querySelector('.face-show')
					const spinner = document.querySelector('.spinner')
					show_message(message_box.load)


					face_show.style.cssText = `width: 100%; height:
									  100%; max-width: 300px; 
									  animation: skale 1s linear;
									  `

					spinner.style.display = 'block'
					setTimeout(() => {
						face_show.src = obj.img_url

						spinner.style.display = 'none'
						show_message(message_box.done)
					}, 2000)



				} else {
					show_message(message_box.error)
				}
			})
		});
}

btn_get.addEventListener('click', getFace);