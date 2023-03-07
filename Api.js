const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'efc18e7cddmsh4f7ac65c6c6fb98p11423cjsn31d096b8c3d0',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
	}
};

async function getData(url){
    var Response = await fetch('https://hotels4.p.rapidapi.com/v2/get-meta-data', options);
    //console.log(Response);
    var data = await Response.json();
    //console.log(data);
	return data;
}
getData('https://hotels4.p.rapidapi.com/v2/get-meta-data');

// var keys = Object.keys(getData());
// console.log(keys);

//var vals = Object.values(getData('https://hotels4.p.rapidapi.com/v2/get-meta-data'));
console.log(Object.values(getData('https://hotels4.p.rapidapi.com/v2/get-meta-data')));
	