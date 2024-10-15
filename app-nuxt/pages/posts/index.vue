<template>
    <h1>{{ status }}</h1>
    <v-col align="center" :cols="12" align-self="center" v-if="status === 'pending'">
        Loading ... <br>
        <v-progress-circular indeterminate :size="200" model-value="20"></v-progress-circular>
    </v-col>

    <v-col v-else v-for="post in posts" :key="post" cols="4">
        <v-card :subtitle="post.title" :text="post.content" :title="post.title">

            <NuxtLink :to="`/posts/${post.id}`">
                <v-btn>Details</v-btn>
            </NuxtLink>
        </v-card>

    </v-col>

</template>

<script setup lang="ts">
const {  status,data: posts } = await useLazyFetch('http://localhost:5150/api/posts')
watch(posts, (newPosts) => {
  // Because posts might start out null, you won't have access
  // to its contents immediately, but you can watch it.
})
if (status.value) console.log('ERROR from useFetch: ', status.value)
</script>

<style scoped></style>