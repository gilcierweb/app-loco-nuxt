<template>
  <v-col align="center" :cols="12" align-self="center" v-if="pending">
                Loading ... <br>
                <v-progress-circular indeterminate :size="200" model-value="20"></v-progress-circular>
            </v-col>
    <v-col  v-else v-for="post in posts" :key="post" cols="4">
        <v-card :subtitle="post.title" :text="post.content" :title="post.title">
           
            <NuxtLink :to="`/posts/${post.id}`">
                                <v-btn>Details</v-btn>
                            </NuxtLink>
        </v-card>

    </v-col>

</template>

<script setup lang="ts">
const { data: posts, pending } = await useFetch('http://localhost:5150/api/posts')
</script>

<style scoped></style>