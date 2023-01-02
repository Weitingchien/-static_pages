<template>
  <v-app :theme="theme">
    <v-app-bar>
      <v-app-bar-title>熱銷排行榜</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn>天瓏網路書店</v-btn>
      <v-btn>博客來</v-btn>
      <v-btn>誠品</v-btn>

      <v-btn
        :prepend-icon="
          theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
        @click="onClick"
        >Toggle Theme</v-btn
      >
    </v-app-bar>

    <v-main>
      <v-container class="bg-surface-variant">
        <v-row no-gutters>
          <v-col cols="12">
            <v-sheet v-for="item in list[0]" :key="item.id" class="pa-2">
              <v-card
                :title="`${item.top} ${item.title}`"
                :href="item.link"
                target="_blank"
              ></v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import axios from 'axios';
import { ref, reactive } from 'vue';

const theme = ref('dark');
const list = reactive([]);

const getList = async () => {
  await axios
    .get('https://djtjvmnpt5.execute-api.us-east-1.amazonaws.com/dev/list')
    .then(res => {
      res.data.data.Items.sort((a, b) => {
        return a.top - b.top;
      });

      list.push(res.data.data.Items);
      console.log(list);
    });
};
getList();
/*
const getList(){

}
*/

const onClick = () => {
  if (theme.value === 'light') {
    theme.value = 'dark';
  } else {
    theme.value = 'light';
  }
};
</script>

<style scoped>
header {
  line-height: 1.5;
}
</style>
