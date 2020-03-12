<template lang="pug">
  .grid
    .leftcol
      .h1 Добро пожаловать!
      p Приветствую вас, дорогие друзья! Меня зовут Ансар Шарипов.
      img(src="~/assets/img/ansar.jpg")
      p Я ветеринар с 30 летним стажем. Специализируюсь на терапии и хирургии.
      img(src="~/assets/img/tnt.jpg")
      p Долгое время я работал в ветеринарной клиние Аграрного университета. Но недавно уволился. На данный момент приезжаю по вызову.
      p Весной-летом откою свой ветеринарный кабинет. Подробнее об этом в видео
      iframe.iframe(width="853" allowfullscreen frameborder="0" src="//vk.com/video_ext.php?oid=-23300507&id=456244536&hash=3cc7c100489cad9f&hd=2")
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
      // Иначе кешируеются
      const {data} = await $axios.get(`news.json?rand=${Math.random()}`)
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

.iframe
  height: 280px

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
  .iframe
    height: 480px
  .grid
    display: grid
    grid-template-columns: 1fr 300px
    grid-gap: 40px
    padding: .5em 2em 0 2em
</style>
