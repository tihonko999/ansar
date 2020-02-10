<template lang="pug">
  .container
    page-header
    nuxt
    page-footer
</template>

<script>
import PageHeader from '~/components/page-header'
import PageFooter from '~/components/page-footer'

export default {
  components: {
    PageHeader,
    PageFooter,
  },
}
</script>
