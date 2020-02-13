<template lang="pug">
  section.main
    h1 Новости
    .item(v-for="item in items")
      .time {{item.date}}
      nuxt-link(:to="`/news/${item.id}`") {{item.title}}
</template>

<script>
export default {
  async asyncData ({ $axios, error }) {
    try {
      const { data } = await $axios.get('/news.json')
      return { items: data }
    } catch (e) {
      error(e)
    }
  },
  head () {
    return {
      title: 'Новости',
    }
  },
}
</script>

<style lang="sass" scoped>
.item
  margin: 0 0 15px 0
  padding: 0 0 15px 0
  .time
    font-style: italic
    margin-bottom: 3px
</style>
