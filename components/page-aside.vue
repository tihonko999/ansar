<template lang="pug">
  aside.aside
</template>

<style scoped>
aside.aside {
  padding: 0 2em;
  section {
    padding: 0 0 1.5em 0;
    time {
      font-style: italic;
    }
    a {
      display: block;
      margin: 0.125em 0 0 1em;
    }
  }
}

@media (min-width: 900px) {
  aside.aside {
    float: right;
    width: 30%;
  }
}
</style>
