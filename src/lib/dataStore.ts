import { writable } from 'svelte/store';
import type {drive_v3} from 'googleapis';

export const dataStore =writable<drive_v3.Schema$File[]>([]);