function getImages() {
	const query = document.getElementById('search').value();
	const accessKey = 'F2lFWWIotI451FfQWo8ge0veTJHvJ7ha5vrdc1QMj24';
	const count = 10;

	fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=${count}&client_id=${accessKey}`)
		.then(response => response.json())
		.then(data => {
			let output = '';
			data.results.forEach(result => {
				output += `
					<div>
						<img src="${result.urls.regular}">
					</div>
				`;
			});
			document.querySelector('.gallery').innerHTML = output;
		})
		.catch(error => console.log(error));
}
