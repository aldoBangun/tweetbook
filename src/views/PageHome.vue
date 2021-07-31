<template>
   <div class=" border-t border-gray-200 border-solid pt-8">
      <div class="container relative rounded-md">
         <button
            class="
               absolute
               -top-12
               right-0
               flex
               items-center
               justify-center
               h-8
               w-8
               rounded-full
               bg-yellow-400
               shadow-md
               hover:bg-yellow-500
               active:bg-yellow-600
            "
         >
            <BIconPlusLg />
         </button>

         <PostList />
      </div>
   </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { BIconPlusLg } from "bootstrap-icons-vue";

export default {
   components: {
      BIconPlusLg,
      PostList
   },
};
</script>
