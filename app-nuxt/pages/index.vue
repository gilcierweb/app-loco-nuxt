<template>
  <v-col v-for="n in 24" :key="n" cols="4">
    <v-card
      subtitle="This is a card subtitle"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
      title="This is a title"
    ></v-card>

    <div class="text-center text-caption">Using Props Only</div>
  </v-col>
</template>
