const btn = document.querySelectorAll('.info__sign');
const modalOverlay = document.querySelector('.filter');
const modal = document.querySelectorAll('.form__wrapper');

btn.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modal.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modal.forEach((el) => {
			el.classList.remove('modal--visible');
			document.querySelector('.modal-form').reset();
		});
	}
});

document.querySelector('.modal-form').reset();

// для очистки формы после отправки данных на сервер document.getElementById("myForm").reset();