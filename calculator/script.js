for (let i = 1; i < 5; i++) {
	const li = document.createElement('li');
	const ul = document.createElement('ul');

	const teksLi = document.createTextNode(`${i}`);
	li.appendChild(teksLi);
	ul.appendChild(li);

	console.log(teksLi);
}
