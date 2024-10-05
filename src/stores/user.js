import { ref } from 'vue'
import { defineStore } from 'pinia'
import { onSnapshot, collection, addDoc, doc, deleteDoc } from 'firebase/firestore'
import { $db } from '@/firebaseConfig.js'

export const useUserStore = defineStore('user', () => {
  const users = ref([])
  //collection -> todos los registros (lista de docs)
  const usersRef = collection($db, 'usuarios')

  async function fetchData() {
    try {
      onSnapshot(usersRef, (encontrado) => {
        //docs -> arreglo de todos los documentos en onSnapshot 
        //permite poder acceder a doc usando map
        //doc -> solo 1 documento de la collection
        users.value = encontrado.docs.map((doc) => ({id: doc.id, ...doc.data()}))
      })
    } catch(error) {
      console.log(error)
    }
  }

  async function addUser(data) {
    try {
      await addDoc(usersRef, { nombre: data.nombre, correo: data.correo })
    } catch (error) {
      console.log('Error adding document:', error)
      alert('No se pudo crear un nuevo usuario')
    }
  }

  async function removeUser(id) {
    try {
      //doc -> busca un documento en especifico
      const userRef = doc($db, 'usuarios', id)
      await deleteDoc(userRef)
    } catch (error) {
      console.error(error)
      alert('No se pudo eliminar el usuario')
    }
  }


  return { users, fetchData, addUser, removeUser }
})
