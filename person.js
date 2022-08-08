window.addEventListener('DOMContentLoaded', () => {
	const new_btn = document.querySelector('.new-btn')

	const message_box = {
		done: 'Все пройшло успішно',
		error: ' Ви ввели неправильні дані'
	}

	function show_message(data) {
		const show_message = document.querySelector('.show-message')
		show_message.innerHTML = data
		setTimeout(() => {
			show_message.innerHTML = ''
		}, 2000)
	}
	async function postFace() {
		const img_url = document.querySelector('.img-url').value

		const name = document.querySelector('.new-surname').value
		const age = document.querySelector('.new-age').value
		if (name.length >= 3 && age.length >= 1 && img_url.length >= 1) {
			await fetch('http://localhost:3000/posts', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify({
					name,
					age,
					img_url
				})
			})
			show_message(message_box.done)
		}
		if (name.length <= 3 || age.length <= 1 || img_url.length <= 1) {
			show_message(message_box.error)
		}
	}

	new_btn.addEventListener('click', postFace);

})