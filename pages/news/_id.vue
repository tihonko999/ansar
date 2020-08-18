<template lang="pug">
  section.main
    p.crumbs
      nuxt-link(to="/news") Новости
      span {{item.title}}
      i {{date}}
    .h1 {{item.title}}
    div(ref="content")
</template>

<script>
import moment from 'moment'
import insertHtml from '~/helpers/insert-html'

export default {
  async asyncData ({$axios, error, params}) {
    try {
      // Иначе кешируеются
      const {data} = await $axios.get(`news.json?rand=${Math.random()}`)
      const item = data.find(el => el.id === +params.id)
      return {item}
    } catch (e) {
      error(e)
    }
  },
  computed: {
    date () {
      return moment(this.item.date).format('DD MMMM YYYY')
    },
  },
  mounted () {
    insertHtml(this.$refs.content, this.item.content)
  },
  head () {
    return {
      title: this.item.title,
      titleTemplate: null,
    }
  },
}
</script>
