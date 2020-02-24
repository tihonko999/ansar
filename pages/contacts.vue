<template lang="pug">
  section.main
    .h1 Контакты
    p Свяжитесь со мной через социальные сети или по номеру телефона. <br> На данный момент возможен только вызов на дом.
    .socials
      a.item.__vk(href="https://vk.com/ansar72")
      a.item.__wa(href="https://api.whatsapp.com/send?phone=79174142891")
    a(href="tel:79174142891")
      img.phone(src="~/assets/img/phone.svg")
</template>

<script>
export default {
  head () {
    return {
      title: 'Контакты',
    }
  },
}
</script>

<style lang="sass" scoped>
.socials
  display: flex
  margin: 30px 0
  .item
    margin-right: 10px
    width: 51px
    height: 51px
    &.__vk
      background: url(~assets/img/vk-logo.svg)
    &.__wa
      background: url(~assets/img/wa-logo.svg)
</style>
