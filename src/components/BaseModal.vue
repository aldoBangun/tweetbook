<template>
   <div class="bg-black bg-opacity-25 fixed inset-0 z-10" @click.self="closeModal" v-if="isOpen">
      <div id="modal" class="bg-white rounded-md shadow-md overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" :class="sizing">
         <header class="p-4 bg-purple-600 text-white" v-if="$slots.header">
            <slot name="header"></slot>
         </header>
         <main class="px-4 pb-8 pt-6 border-b border-solid border-gray-200">
            <slot></slot>
         </main>
         <footer class="px-4 py-3">
            <slot name="footer" v-if="$slots.footer"></slot>
         </footer>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      size: {
         type: String,
         default: 'md'
      },
      isOpen: {
         type: Boolean,
         default: true
      }
   },
   computed: {
      sizing() {
         let width = this.size

         switch (width) {
            case 'sm': width = 'w-96'; 
            break;
            case 'lg': width = 'w-[40rem]'; 
            break;
            default: width = 'w-[32rem]';
         } 

         return width
      }
   },
   methods: {
      closeModal() {
         this.$emit('close-modal')
      }
   }
}
</script>