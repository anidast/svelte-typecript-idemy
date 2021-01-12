import { Writable, writable } from 'svelte/store';

let token: Writable<string> = writable('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEwMDc4MzMzLCJleHAiOjE2MTA2ODMxMzN9.BBbNzZT88ZYLL5D0LV7fTVZj61xrxFNlOz-v_fsvCDE');
let page: Writable<any> = writable({});
let minioUrl: Writable<string> = writable('http://127.0.0.1:9000/minio/idemy/cms/');

export { token, page, minioUrl };