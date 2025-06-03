<template lang="pug">
  section.main
    .h1 Контакты
    p: b Шарипов Ансар Радикович
    p Ветеринарный врач, кандидат ветеринарных наук
    .socials
      a.item.__vk(href="https://vk.com/ansar72")
      a.item.__wa(href="https://api.whatsapp.com/send?phone=79174142891")
    a(href="tel:+79174142891") +7-(917)-414-28-91
    p г.Уфа, бульвар Хадии Давлетшиной 9, под №3, офис 6
    iframe(src="https://yandex.ru/map-widget/v1/?um=constructor%3Af4ecef90d78629f5d3ae669f04d5857dfb9ff6db0d5db7c53b1160eab8900676&amp;source=constructor" width="100%" height="400" frameborder="0")
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

<style scoped>
.socials {
  display: flex;
  margin: 30px 0;

  .item {
    margin-right: 10px;
    width: 51px;
    height: 51px;

    &.__vk {
      background: url(~assets/img/vk-logo.svg);
    }

    &.__wa {
      background: url(~assets/img/wa-logo.svg);
    }
  }
}
</style>
