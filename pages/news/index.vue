<template lang="pug">
  section.main
    .h1 Новости
    .item(v-for="item in items")
      .time {{date(item.date)}}
      nuxt-link(:to="`/news/${item.id}`") {{item.title}}
</template>

<script>
import moment from 'moment'

export default {
  async asyncData ({$axios, error}) {
    try {
      // Иначе кешируеются
      const {data} = await $axios.get(`news.json?rand=${Math.random()}`)
      return {items: data}
    } catch (e) {
      error(e)
    }
  },
  methods: {
    date (date) {
      return moment(date).format('DD MMMM YYYY')
    },
  },
  head () {
    return {
      title: 'Новости',
    }
  },
}
</script>

<style scoped>
.item {
  margin: 0 0 15px 0;
  padding: 0 0 15px 0;

  .time {
    font-style: italic;
    margin-bottom: 3px;
  }
}
</style>
