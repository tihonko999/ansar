<template lang="pug">
  div
    .header
      nuxt-link.logo(to="/")
      nuxt-link.name(to="/") Ветеринар Ансар Шарипов
    .nav
      nuxt-link.link(to="/") Главная
      a.link Услуги
      nuxt-link.link(to="/info") Часто задаваемые вопросы
      a.link Контакты
      nuxt-link.link(to="/news") Новости
</template>

<style lang="sass" scoped>
@font-face
  font-family: "Segoe Print"
  src: url('assets/segoe-print.ttf')
.header
  padding: 0 1em 1em 1em
  display: flex
  align-items: center
  .logo
    flex: 0 0 auto
    width: 45px
    height: 45px
    background: url(assets/logo.jpg) center / contain
    margin-right: 20px
  .name
    font-family: "Segoe Print", sans-serif
    font-size: 1.3em
    color: #000
    text-decoration: none
.nav
  background: linear-gradient(to bottom, rgb(0, 70, 121), rgb(0, 89, 133))
  padding: 1em 0
  display: flex
  overflow: auto
  a.link
    color: white
    padding: 0 .7em
    border-right: 2px solid #fff
    white-space: nowrap
    &.nuxt-link-exact-active
      text-decoration: none
    &:link
      color: white
    &:hover
      color: white
    &.active
      font-style: italic
//desktop
@media (min-width: $breakpoint)
  .header
    padding: 0 2em 1.5em 2em
    .logo
      width: 85px
      height: 85px
      margin-right: 30px
    .name
      font-size: 2em
  .nav
    padding: 1em 1.5em
</style>
