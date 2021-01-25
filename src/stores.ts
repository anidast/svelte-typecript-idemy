import { Writable, writable } from 'svelte/store';

// let token: Writable<string> = writable('');
let token: Writable<string> = writable(getJwt());
let page: Writable<any> = writable({});
let minioUrl: Writable<string> = writable('http://127.0.0.1:9000/minio/idemy/cms/');

function getJwt(): string{
	var name = "jwt=";
	var jwttoken: string;
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
}

// async function createJwt() {
// 	const response = await fetch("http://localhost:1337/auth/local", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({
// 			identifier: "admin",
// 			password: "adminadmin",
// 		}),
// 	});
// 	let data = await response.json();
// 	let jwtToken = await data.jwt;
// 		var d = new Date();
// 		d.setTime(d.getTime() + (24*60*60*1000));
// 		document.cookie = "jwt=" + jwtToken + ";expires=" + d.toString();
// 		console.log(data);
// 		token = data.jwt;
// 	return jwtToken;
// };
// async function isValid(token: string){
// 	const response = await fetch("http://localhost:1337/users/me/", {
// 		method: "GET",
// 		headers: {
// 			Authorization: "Bearer " + token,
// 		},
// 	})
// 	.then(response => {
// 		console.log(response);
// 		if (response.status == 401){
// 			return false;
// 		}
// 		else{
// 			return true;
// 		}
// 	});
// }

export { token, page, minioUrl, getJwt };