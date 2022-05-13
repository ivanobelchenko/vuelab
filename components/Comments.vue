<template>
  <div>
    <div class="text-h4" align="center">Комментарии</div>
    <comments-list v-if="!load" :array="comments" />
    <loader v-if="load" />
    <div v-if="validate" class="text" align="center">
      Нельзя оставлять пустой комментарий!
    </div>
    <comment-form @add="addComment" />
  </div>
</template>

<script>
import CommentForm from './CommentForm.vue'
import CommentsList from './CommentsList.vue'
import Loader from './Loader.vue'
export default {
  name: 'Comments',
  components: { CommentsList, CommentForm, Loader },
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      comments: [],
      validateError: false,
      load: true,
    }
  },
  beforeMount() {
    this.getComments()
  },
  methods: {
    async getComments() {
      await fetch(
        `https://demo-api.vsdev.space/api/articles/${this.id}/comments`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      )
        .then((res) => {
          return res.json()
        })
        .then(
          (result) => {
            this.comments = result
          },
          (error) => {
            console.log(error)
          }
        )
      this.load = false
    },
    async addComment(data) {
      if (data.name !== '' && data.comment !== '') {
        this.validateError = false
        await fetch(
          `https://demo-api.vsdev.space/api/articles/${this.id}/comments`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user_name: data.name,
              comment: data.comment,
            }),
          }
        )
        this.getComments()
      } else {
        this.validateError = true
      }
    },
  },
}
</script>
<style lang="scss">
.news {
  margin-block-end: 20px;
}
</style>
