<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user.js';
import AddIcon from './icons/AddIcon.vue';

const usersStore = useUserStore()

const nombre = ref('')
const correo = ref('')

function handleSubmit() {
  usersStore.addUser({ nombre: nombre.value, correo: correo.value })
}

</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h2>Agrega Un Nuevo Usuario</h2>
    <div class="form-container">
      <div>
        <label for="nombre">Nombre</label>
        <input id="nombre" v-model="nombre" placeholder="Nombre del usuario" required />
      </div>
      <div>
        <label for="correo">Correo</label>
        <input id="correo" v-model="correo" type="email" placeholder="ejemplo@gmail.com"  required>
      </div>
      <button>
        <AddIcon />
        Agregar
      </button>
    </div>
  </form>
</template>

<style scoped>

h2 {
  margin-bottom: .5rem;
  font-size: 1.2rem;
}

form {
  display: flex; 
  flex-direction: column;
  gap: 1rem;
  border: 1px solid lightgrey;
  box-shadow: 1px 5px 20px 1px rgba(141, 141, 141, 0.24);
  padding: 1rem;
  border-radius: .3rem;
}

.form-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: end;
  gap: 1rem;
}

form div {
  display: flex;
  flex-direction: column;
  flex: 1;
}

input {
  margin-top: .2rem;
  padding: .4rem .5rem;
  border-radius: .3rem;
  border: 1px solid rgb(173, 173, 173);
  outline: none;
}

input:focus {
  border-color: #54b454; 
  box-shadow: 0 0 5px rgba(84, 180, 84, 0.616); 
}

button {
  padding: .15rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: .3rem;
  border-radius: .3rem;
  border: 1px solid #54b454;
  color: #54b454;
  margin-inline: auto 0; /* (start: left) (end: right) */
}

button:hover {
  background-color: #54b454;
  color: white;
  cursor: pointer;
  transition: background-color ease-in-out .2s, color ease-in-out .2s;
}

button svg {
  fill: #54b454;
  transition: fill ease-in-out .2s;
}

button:hover svg {
  fill: white;
}
</style>