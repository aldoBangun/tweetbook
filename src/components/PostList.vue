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
import { mapGetters, mapActions } from 'vuex'

export default {
   components: {
      PostItem
   },
   computed: {
      ...mapGetters({
         posts: 'posts'
      })
   },
   methods: {
      ...mapActions({
         loadPosts: 'loadPosts'
      })
   },
   async created() {
      await this.loadPosts()
   }
}

</script>