
		const ACCESS_KEY = 'F2lFWWIotI451FfQWo8ge0veTJHvJ7ha5vrdc1QMj24';

		const gallery = document.getElementById('gallery');
		const searchBtn = document.getElementById('searchBtn');
		const categoryInput = document.getElementById('category');
        const count = 20;

		searchBtn.addEventListener('click', () => {
			const category = categoryInput.value.trim();
			if (!category) return;

			fetch(`https://api.unsplash.com/search/photos?query=${category}&per_page=${count}&client_id=${ACCESS_KEY}`)
				.then(response => response.json())
				.then(data => {
					gallery.innerHTML = '';
					data.results.forEach(photo => {
						const card = document.createElement('div');
						card.classList.add('card');

						const img = document.createElement('img');
						img.src = photo.urls.regular;
						img.alt = photo.alt_description;

						const title = document.createElement('h3');
						title.textContent = photo.alt_description;

						card.appendChild(img);
						card.appendChild(title);

						gallery.appendChild(card);
					});
				})
				.catch(error => console.error(error));
		});
