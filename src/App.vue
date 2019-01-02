<template>
  <div id="app">
    <HeaderPanel />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderPanel from '@/layouts/HeaderPanel'

export default {
  name: 'home',
  components: {
    HeaderPanel
  }
}
</script>

<style lang="scss">
@import '@/scss/base.scss';
</style>
