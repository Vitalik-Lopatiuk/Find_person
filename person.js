window.addEventListener('DOMContentLoaded', () => {
	const new_btn = document.querySelector('.new-btn')
	const new_person = document.querySelector('.new-person')
	async function postFace() {
		
		const name = document.querySelector('.new-surname').value
		const age = document.querySelector('.new-age').value
		fetch('  http://localhost:3000/profile', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				 name,
				 age
			})
		})
	}

	new_btn.addEventListener('click', postFace);


})