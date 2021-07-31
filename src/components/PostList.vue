<template>
   <h2 class="text-sm text-gray-400 font-medium tracking-wide uppercase mb-4">All Posts</h2>
   <ul v-if="posts.length" class="space-y-4">
      <PostItem 
         v-for="post in posts"
         :key="post._id"
         :_id="post._id"
         :title="post.title"
         :content="post.content"
         :user="post.user"
         :createdAt="post.createdAt"
      />
   </ul>
   <div v-else>
      <p class="text-gray-500">No Posts yet.</p>
   </div>
</template>

<script>
import PostItem from './PostItem.vue'

export default {
   components: {
      PostItem
   },
   data() {
      return {
         posts: [
            {
               _id: '1',
               title: 'Learning Vue.js',
               content: 'here is me with my laptop spending time together to understand more about Vue and a little bit about Node.js',
               user: {
                  _id: '2',
                  displayName: 'Aldo Bangun',
                  image: 'https://picsum.photos/id/13/200/200'
               },
               createdAt: '18 July 2021' 
            },
            {
               _id: '2',
               title: 'Vue Auth Learning',
               content: 'Never tought that learning web is quiet dificult.',
               user: {
                  _id: '1',
                  displayName: 'Iwan Tafui',
                  image: 'https://picsum.photos/id/15/200/200'
               },
               createdAt: '20 July 2021'
            },
         ]
      }
   }
}

</script>