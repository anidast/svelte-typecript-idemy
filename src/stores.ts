import { Writable, writable } from 'svelte/store';

let token: Writable<string> = writable('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA4NjQ5NTY5LCJleHAiOjE2MTEyNDE1Njl9.bQ91xOveSGW2jgE_-spDJBkTX8FJgU06OmZkyiBIvDU');

export { token };