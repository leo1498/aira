<script>
  import Header from "./components/Header.svelte"
  import Conversation from "./components/Conversation.svelte"
  import Typing from "./components/Typing.svelte"
</script>

<div class="fixed bottom-0 right-0 h-[700px] max-h-[calc(100vh-20px)] min-h-[150px] w-[calc(100%-20px)] sm:w-[380px] pr-5 pb-5">
  <div class="size-full flex flex-col overflow-y-auto scrolling-touch mx-auto shadow-md rounded-xl">
    <Header />
    <Conversation />
    <Typing />
  </div>
</div>

<style>

</style>
