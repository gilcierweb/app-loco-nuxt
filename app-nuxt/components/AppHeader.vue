<template>
    <v-app-bar :elevation="2">

        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>App Loco Nuxt</v-app-bar-title>

        <v-btn
          v-for="link in links"
          :key="link"
          :text="link"
          variant="text"
        ></v-btn>

        <NuxtLink :to="`/`">
            <v-btn>Home</v-btn>
        </NuxtLink> 
         <NuxtLink :to="`/posts`">
            <v-btn>Posts</v-btn>
        </NuxtLink>  
         <NuxtLink :to="`/about`">
            <v-btn>About</v-btn>
        </NuxtLink>

        
    </v-app-bar>
</template>


<script setup>
  const links = [
    'Dashboard',
    'Messages',
    'Profile',
    'Updates',
  ]
</script>

<style lang="scss" scoped>

</style>