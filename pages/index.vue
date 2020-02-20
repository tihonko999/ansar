<template lang="pug">
  .grid
    .leftcol
      .h1 Добро пожаловать!
      p Lorem ipsum
    .rightcol
      .h1 Свежие новости
      .item(v-for="item in items")
        .time {{date(item.date)}}
        nuxt-link(:to="`/news/${item.id}`") {{item.title}}
      .all
        nuxt-link(to="/news") Все новости →
</template>

<script>
import moment from 'moment'

export default {
  async asyncData ({$axios, error}) {
    try {
      const {data} = await $axios.get('/news.json')
      return {items: data.splice(0, 3)}
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
      titleTemplate: null,
    }
  },
}
</script>

<style lang="sass" scoped>
.grid
  padding: .5em 1em 0 1em
.rightcol
  .item
    margin-bottom: 20px
    .time
      font-style: italic
      margin-bottom: 3px
  .all
    text-align: right
//desktop
@media (min-width: $breakpoint)
  .grid
    display: grid
    grid-template-columns: 1fr 300px
    grid-gap: 40px
    padding: .5em 2em 0 2em
</style>
