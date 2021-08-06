import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
   state() {
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
   },
   getters: {
      posts(state) {
         return state.posts
      }
   },
   mutations: {
      ADD_POST(state, payload) {
         state.push(payload)
      },
      SET_POSTS(state, payload) {
         state.posts = payload
      }
   },
   actions: {
      async loadPosts(context) {
         const res = await axios.get('http://localhost:5000/posts')
         context.commit('SET_POSTS', res.data.posts)
      },
      async addPost(context, payload) {

      }
   }
})

export default store