import { Writable, writable } from 'svelte/store';

// let token: Writable<string> = writable('');
let token: Writable<string> = writable('');
let page: Writable<any> = writable({});
let pages: Writable<any[]> = writable([]);
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

export { token, page, pages, minioUrl, getJwt };