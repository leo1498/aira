import { writable } from 'svelte/store'

export const messageState = writable({
    id: '',
    message: '',
    created: '',
    isMine: false
})
export const isTypingState = writable(false)
