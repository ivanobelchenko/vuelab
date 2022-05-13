<template>
  <v-container class="d-flex pa-2 flex-wrap">
    <loader v-if="load" />
    <filters v-if="!load" />
    <v-row>
      <v-card
        v-for="article in articles"
        :key="article.id"
        class="mx-auto my-12"
        max-width="374"
      >
        <v-img height="250" :src="returnSource(article.preview_image)"></v-img>

        <v-card-title>{{ article.name }}</v-card-title>

        <v-card-text>
          <div>{{ article.shortDesc }}</div>
          <div>
            {{ article.date }}
          </div>
        </v-card-text>
        <v-card-actions>
          <NuxtLink :to="`article/${article.id}`">
            <v-btn color="deep-purple lighten-2" text> Подробнее </v-btn>
          </NuxtLink>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import Loader from '../components/Loader.vue'
import filters from '../components/Filters.vue'
export default {
  name: 'News',
  components: { Loader, filters },
  data() {
    return { articles: [], load: true }
  },
  head() {
    return { title: 'Новости' }
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
          this.articles = result
        },
        (error) => {
          console.log(error)
        }
      )
    this.load = false
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
