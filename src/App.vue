<script setup>
import CreateUsers from './components/CreateUsers.vue';
import ShowUsers from './components/ShowUsers.vue';
</script>

<template>
  <main>
    <h1>USUARIOS</h1>
    <CreateUsers />
    <ShowUsers />
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
  font-weight: bold;
  margin-bottom: 2rem;
}
</style>
