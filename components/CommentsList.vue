<template>
  <div>
    <v-row v-for="(item, i) in array" :key="i">
      <v-col cols="2">
        <i>{{ item.user_name }}</i>
      </v-col>
      <v-col
        ><p>{{ item.comment }}</p></v-col
      >
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'CommentList',
  props: {
    array: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
