<script>
  import { messageStore, isTypingStore } from "../services/stores"
  import { postRequest } from "../services/api";
  import { getTime } from "../services/time";

  let isTyping
  let value
  
  function sendMessage() {
    addMessage({
      id: '',
      message: value,
      created: '8:30 AM',
      isQuestion: true,
    })
    sendRequest({
      message: value,
      session: null,
    })
    value = ''
  }

  function addMessage(data) {
    messageStore.update(() => ({
      id: data.id,
      message: data.message,
      created: getTime(new Date()),
      isQuestion: !!data.isQuestion,
    }))
  }

  function sendRequest(data) {
    isTypingStore.set(true)
    postRequest('/tenants/dummy/query', data)
      .then(response => {
        isTypingStore.set(false)
        addMessage(response)
      })
      .catch(error => {
        isTypingStore.set(false)
        console.error('Error while simulating API request:', error)
      })
  }

  $: isTyping = $isTypingStore

</script>

<div class="bg-white pt-2 pb-3 z-20">
  <div class="flex items-center h-11 px-3 relative">

    <textarea
      class="border-[1px] border-gray-200 h-full w-full px-4 py-3 pr-16 rounded-3xl text-sm focus:outline-black placeholder:font-light resize-none" 
      placeholder="Type a message..."
      disabled={isTyping || null}
      bind:value={value}
    ></textarea>

    {#if !isTyping}
      <button 
        class="absolute top-1/2 -translate-y-1/2 right-3 flex items-center justify-center size-11 pl-[2px] rounded-full"
        on:click={sendMessage}
      >
        <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#000"><path d="M18,11 L2,19 L2,11 L18,11 Z M2,1 L18,9 L2,9 L2,1 Z"></path></g></g></svg>
      </button>
    {/if}

  </div>
</div>
