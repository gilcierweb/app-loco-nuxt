<template>
  <v-container>
        <h1>Show Post Page</h1>
        <h1>{{ status }}</h1>
        <v-row>

            <v-col align="center" :cols="12" align-self="center" v-if="status === 'pending'">
                Loading ... <br>
                <v-progress-circular indeterminate :size="200" model-value="20"></v-progress-circular>
            </v-col>
            <v-col v-else cols="12">
                <v-img height="400px" src="https://via.assets.so/game.png?id=1&q=95&w=400&h=400&fit=fill" cover></v-img>
                <h2>{{ post?.title }}</h2>
                <p>{{ post?.content }}</p>
                <p>{{ post?.status }}</p>
                <h1>{{ $route.params.id }} - {{ route.params.id }}</h1>
           
            </v-col>

        </v-row>
    </v-container>
</template>

<script setup lang="ts">
const { $truncate } = useNuxtApp();
const route = useRoute();
const config = useRuntimeConfig();

const id = route.params.id;
console.log(route.params.id);

interface Post {
    id: number;
    title: string;
    content: string;
    status: boolean;
}

const {status, data: post } = await useLazyFetch<Post>(`${config.public.baseURL}/api/posts/${id}`);
</script>

<style scoped>

</style>