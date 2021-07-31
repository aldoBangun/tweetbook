<template>
   <li class="rounded-lg bg-white overflow-hidden shadow-sm hover:shadow-md transition">
      <div class="p-4 bg-purple-200 text-purple-900">
         <router-link :to="'#/posts/'+_id" class="font-semibold">{{ title }}</router-link>
      </div>

      <div class="p-4 pb-8 bg-white">
         <p>{{ content }}</p>
      </div>
      
      <div class="flex items-center justify-between p-4 border-t border-gray-200 border-solid">
         <div class="flex items-center gap-4 space-between">
            <img :src="user.image" alt="image" class="w-10 h-10 rounded-full">
            <div>
               <router-link :to="'#/users/'+ user._id" class="font-medium">{{ user.displayName }}</router-link>
               <p class="text-[.75rem] text-gray-500">{{ createdAt }}</p>
            </div>
         </div>

         <div class="flex items-center">
            <button class="text-blue-400 hover:bg-blue-100 h-8 w-8 rounded-full flex items-center justify-center text-sm">
               <BIconPen />               
            </button>
            <button class="text-red-400 hover:bg-red-100 h-8 w-8 rounded-full flex items-center justify-center text-sm">
               <BIconTrash />               
            </button>
         </div>
      </div>
   </li>
</template>

<script>
import { BIconTrash, BIconPen } from 'bootstrap-icons-vue'

export default {
   components: {
      BIconTrash,
      BIconPen
   },
   props: {
      _id: {
         type: String,
         required: true
      },
      title: {
         type: String,
         required: true
      },
      content: {
         type: String,
         required: true
      },
      user: {
         type: Object,
         required: true
      },
      createdAt: {
         type: String,
         required: true
      }
   }
}

</script>