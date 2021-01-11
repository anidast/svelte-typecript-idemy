import { Writable, writable } from 'svelte/store';

let token: Writable<string> = writable('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEwMDc4MzMzLCJleHAiOjE2MTA2ODMxMzN9.BBbNzZT88ZYLL5D0LV7fTVZj61xrxFNlOz-v_fsvCDE');
let page: Writable<any> = writable({});

export { token, page };