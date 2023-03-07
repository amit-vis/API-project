const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c44de9273msh0850216d0ca870fp14ceeejsnc7d5412f7757',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

//async await
async function getData(url) {
	try {
		localStorage.clear();
		let response = await fetch(url, options);
		let data = await response.json();
		console.log(data);
		if (data.d.length)
			ProcessData(data.d);
	}
	catch (ex) {
		console.log(ex);
	}
}

getData('https://imdb8.p.rapidapi.com/auto-complete?q=Harry%20Potter');



function ProcessData(info) {
	// console.log(info)
	for (let i = 0; i < info.length; i++) {
		if (info[i].i) {
			localStorage.setItem(`Image-${i+1}`,info[i].i.imageUrl );
			// console.log(info[i].i.imageUrl);
		}
	}
	abc();
}