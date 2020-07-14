<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-info">
    <div class="container">
      <app-logo href="/" brand="Learn Vue"></app-logo>
      <app-menu />
    </div>
  </header>
</template>

<script>
import AppLogo from "../components/Logo";
import AppMenu from "./Menu";
export default {
  name: "app-header",
  components: {
    AppLogo,
    AppMenu,
  },
};
</script>

<style></style>
