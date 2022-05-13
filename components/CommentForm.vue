<template>
  <div>
    <v-text-field v-model="name" label="Имя"></v-text-field>
    <v-text-field v-model="comment" label="Комментарий"></v-text-field>
    <v-btn elevation="2" small @click="add()">Добавить</v-btn>
  </div>
</template>

<script>
export default {
  name: 'CommentForm',
  data() {
    return {
      name: '',
      comment: '',
    }
  },
  methods: {
    add() {
      this.$emit('add', {
        name: this.name,
        comment: this.comment,
      })
      this.clear()
    },
    clear() {
      this.comment = ''
      this.name = ''
    },
  },
}
</script>
<style lang="scss">
.news {
  margin-block-end: 20px;
}
</style>
