import { Writable, writable } from 'svelte/store';

let token: Writable<string> = writable('');

export { token };