<template>
  <v-container>
    <div class="text-h3" align="center">
      {{ article.name }}
    </div>
    <v-img
      width="400"
      class="mx-auto my-5"
      :src="returnSource(article.full_image)"
    ></v-img>
    <p>
      {{ article.desc }}
    </p>
    <i>{{ article.date }}</i>
    <Comments :id="$route.params.id" />
  </v-container>
</template>

<script>
export default {
  name: 'Article',
  data() {
    return {
      article: {},
    }
  },
  head() {
    return { title: this.article.name }
  },
  mounted() {
    fetch(`https://demo-api.vsdev.space/api/articles/${this.$route.params.id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        return res.json()
      })
      .then(
        (result) => {
          this.article = result
        },
        (error) => {
          console.log(error)
        }
      )
  },
  methods: {
    returnSource(src) {
      return `/images/${src}`
    },
  },
}
</script>
<style lang="scss">
.news {
  margin-block-end: 20px;
}
</style>
