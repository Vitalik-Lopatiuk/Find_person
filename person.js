window.addEventListener('DOMContentLoaded', () => {
	const new_btn = document.querySelector('.new-btn')
	const new_person = document.querySelector('.new-person')
	async function postFace() {
		const img_url = document.querySelector('.img-url').value


		const name = document.querySelector('.new-surname').value
		const age = document.querySelector('.new-age').value
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
	}

	new_btn.addEventListener('click', postFace);


})