<template lang="pug">
  div
    .header
      nuxt-link.logo(to="/")
      nuxt-link.name(to="/") Ветеринар Шарипов Ансар
    .nav
      a.link Главная
      a.link Услуги
      a.link Часто задаваемые вопросы
      a.link Контакты
      a.link Новости
</template>

<style lang="sass">
//header
/*@font-face*/
/*  font-family: "Segoe Print"*/
/*  src: url('/fonts/segoe_print.ttf')*/
.header
  padding: 0 1em
  display: flex
  align-items: center
  .logo
    flex: 0 0 auto
    width: 45px
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
    &:link
      color: white
    &:hover
      color: white
    &.active
      font-style: italic
  //desktop
  @media (min-width: $breakpoint)
    .header
      padding: 0 2em
      .logo
        width: auto
        margin-right: 30px
      .name
        font-size: 2em
    .nav
      padding: 0 1.5em
</style>
