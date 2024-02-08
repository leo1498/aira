<script>
  import { onMount } from 'svelte'
  import { getRequest } from './services/api'
  import Header from './components/Header.svelte'
  import Conversation from './components/Conversation.svelte'
  import Typing from './components/Typing.svelte'

  let showApp = true

  // onMount(async () => {
  //   try {
  //     const response = await getRequest('/init')
  //     if (response.ok) {
  //       showApp = true
  //       console.log('chat init')
  //     }
  //   } catch (error) {
      
  //   }
  // })
</script>

{#if showApp}
  <div class="fixed bottom-0 right-0 h-[700px] max-h-[calc(100vh-20px)] min-h-[150px] w-[calc(100%-20px)] sm:w-[380px] pr-5 pb-5">
    <div class="size-full flex flex-col mx-auto shadow-md rounded-xl overflow-hidden">
      <Header />
      <Conversation />
      <Typing />
    </div>
  </div>
{/if}

<style>
</style>
