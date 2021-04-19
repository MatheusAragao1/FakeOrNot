<template>
  <div id="app">    
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">Verificador noticias de covid-19 (UFF 2021)</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/">Verificador de fake news</b-nav-item>
        <b-nav-item to="/vacinacao">Quando me vacino?</b-nav-item>
      </b-navbar-nav>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  </b-navbar>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

</style>
