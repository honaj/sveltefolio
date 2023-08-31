import { writable } from 'svelte/store';

export const width = writable(10);
export const height = writable(10);
export const isCircle = writable(true);