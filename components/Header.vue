<template>
  <v-app-bar
    app
    dense
    flat
    absolute
    color="#fcb69f"
    dark
    shrink-on-scroll
    src="https://picsum.photos/1920/1080?random"
  >
    <template #img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      ></v-img>
    </template>
    <Logo :style="{ width: 120, marginTop: 20 }" />
    <v-spacer></v-spacer>
    <div :style="{ width: 80 }">
      <v-text-field label="search"></v-text-field>
    </div>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <template #extension>
      <v-tabs align-with-title>
        <v-tab class="link"
          ><NuxtLink class="nuxt-link" to="/">Главная </NuxtLink></v-tab
        >
        <v-tab class="link"
          ><NuxtLink class="nuxt-link" to="/news"> Новости</NuxtLink>
        </v-tab>
        <v-tab class="link"
          ><NuxtLink class="nuxt-link" to="/gallery"> Галерея </NuxtLink>
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped lang="scss">
.link {
  text-decoration: none !important;
  padding: 0;
}
.nuxt-link {
  text-decoration: none !important;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: whitesmoke;
}
.nuxt-link-exact-active {
  color: white;
}
</style>
