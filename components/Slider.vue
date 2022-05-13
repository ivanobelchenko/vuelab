<template>
  <v-carousel hide-delimiterss>
    <v-carousel-item
      v-for="article in articles"
      :key="article.id"
      :src="returnSource(article.full_image)"
    >
      <div class="text-h2 slider">
        {{ article.name }}
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return { articles: [] }
  },
  async beforeMount() {
    await fetch('https://demo-api.vsdev.space/api/articles', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        return res.json()
      })
      .then(
        (result) => {
          this.articles = result.filter((item) => item.slider === true)
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

<style scoped lang="scss">
.slider {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
