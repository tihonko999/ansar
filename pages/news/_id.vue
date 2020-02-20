<template lang="pug">
  section.main
    p.crumbs
      nuxt-link(to="/news") Новости
      span {{item.title}}
      i {{date}}
    h1 {{item.title}}
    div(v-html="item.content")
</template>

<script>
import moment from 'moment'

export default {
  async asyncData ({ $axios, error, params }) {
    try {
      const { data } = await $axios.get('/news.json')
      const item = data.find(el => el.id === +params.id)
      return { item }
    } catch (e) {
      error(e)
    }
  },
  computed: {
    date () {
      return moment(this.item.date).format('DD MMMM YYYY')
    },
  },
  head () {
    return {
      title: this.item.title,
    }
  },
}
</script>
