<template>
  <base-modal size="lg" @close-modal="closeModal" :isOpen="isOpen">
   <template #header>
      <h1>Add Post</h1>
   </template>
   <template #default>
      <form @submit.prevent>
         <div>
            <label for="title">Title</label>
            <input type="text" id="title" v-model="title" class="w-full border border-solid border-gray-200">
         </div>
      </form>  
   </template>
   <template #footer>
      <button @click="closeModal" class="bg-red-500 text-white rounded-sm px-4 py-1"> Close </button>
   </template>
  </base-modal>
</template>

<script>
export default {
   data() {
      return {
         title: '',
         content: '',
      }
   },
   computed: {
      isOpen() {
         return this.$store.state.modal.create 
      }
   },
   methods: {
      closeModal() {
         this.$store.commit('SET_MODAL_CREATE', false)
      }
   }
}
</script>