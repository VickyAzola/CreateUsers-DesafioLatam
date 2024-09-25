import { ref } from 'vue'
import { defineStore } from 'pinia'
import { onSnapshot, collection, addDoc, doc, deleteDoc } from 'firebase/firestore'
import { $db } from '@/firebaseConfig.js'

export const useUserStore = defineStore('user', () => {
  const users = ref([])

  async function fetchData() {
    try {
      const usersRef = collection($db, 'usuarios')
      onSnapshot(usersRef, (encontrado) => {
        users.value = encontrado.docs.map((doc) => ({id: doc.id, ...doc.data()}))
      })
    } catch(error) {
      console.log(error)
    }
  }

  async function addUser(data) {
    try {
      const usersRef = collection($db, 'usuarios')
      await addDoc(usersRef, { nombre: data.nombre, correo: data.correo })
      
    } catch (error) {
      console.log('Error adding document:', error)
    }
  }

  async function removeUser(id) {
    try {
      const usersRef = doc($db, 'usuarios', id)
      await deleteDoc(usersRef)
    } catch (error) {
      console.error(error)
    }
  }


  return { users, fetchData, addUser, removeUser }
})
