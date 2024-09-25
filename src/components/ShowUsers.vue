<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user.js';
import DeleteIcon from './icons/DeleteIcon.vue';

const usersStore = useUserStore()

onMounted(() => {
  usersStore.fetchData()
})

function handleRemove(id) {
  usersStore.removeUser(id)
}

</script>

<template>
  <h3>Usuarios Agregados</h3>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Correo</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in usersStore.users" :key="user.id">
        <td>{{ index + 1 }}</td>
        <td>{{ user.nombre }}</td>
        <td>{{ user.correo }}</td>
        <td>
          <button @click="handleRemove(user.id)">
            <DeleteIcon />
            Eliminar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>

h3 {
  margin: 2rem 0 1rem;
}

table {
  width: 100%;
  text-align: center;

}

thead {
  background-color: lightgray;
  padding: 1rem;
}

td {
  border: 1px solid lightgray;
  padding: .5rem;
}

button {
  padding: .15rem 1rem;
  display: flex;
  align-items: center;
  column-gap: .3rem;
  border: 1px solid #e25b5b;
  color: #e25b5b;
  border-radius: .3rem;
  margin-inline: auto;
  transition: background-color ease-in-out .2s, color ease-in-out .2s;
}

button:hover {
  background-color: #e25b5b;
  color: white;
  cursor: pointer;
}

button svg {
  fill: #e25b5b;
  transition: fill ease-in-out .2s;
}

button:hover svg {
  fill: white;
}

</style>