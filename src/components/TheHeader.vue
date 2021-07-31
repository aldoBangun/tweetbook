<template>
   <header class="bg-purple-900 text-white mb-16">
      <nav class="container h-20 flex items-center justify-between">
         <router-link to="/" class="border border-white border-solid px-2 py-1 font-bold">
            Twooter
         </router-link>
         <ul class="flex items-center gap-4">
            <li>
               <router-link :to="{name: 'home'}" class="text-yellow-400">Home</router-link>
            </li>
            <li>
               <button>Logout</button>
            </li>
         </ul>
      </nav>
   </header>
</template>