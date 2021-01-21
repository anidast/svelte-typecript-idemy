import { Writable, writable } from 'svelte/store';

let token: Writable<string> = writable('');
let page: Writable<any> = writable({});
let minioUrl: Writable<string> = writable('http://127.0.0.1:9000/minio/idemy/cms/');

function getJwt(){
	var name = "jwt=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			var token = c.substring(name.length, c.length);
				return token;
		}
	}
	
	const response = fetch("http://localhost:1337/auth/local", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			identifier: "admin",
			password: "adminadmin",
		}),
	})
	.then((response) => response.json())
	.then((data) => {
		var d = new Date();
		d.setTime(d.getTime() + (24*60*60*1000));
		document.cookie = "jwt=" + data.jwt + ";expires=" + d.toString();
		console.log(data.jwt);
		return data.jwt;
	});
}


export { token, page, minioUrl, getJwt };