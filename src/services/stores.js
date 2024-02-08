import { writable } from 'svelte/store'

export const messageStore = writable({
    id: '',
    message: '',
    created: '',
    isQuestion: false
})
export const isTypingStore = writable(false)
