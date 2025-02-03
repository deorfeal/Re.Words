<script setup lang="ts">
import { RouterView } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from './stores/user';
import { onMounted } from 'vue';
import Loader from './components/Loader.vue';

import Alert from './components/Alert.vue';

const userStore = useUserStore()

onMounted(() => {
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      userStore.userId = user.uid
    } else {
      userStore.userId = ''
    }
  })
})



</script>

<template>
  <router-view />
  <teleport to="body">
    <Alert />
    <Loader />
  </teleport>
</template>

<style lang="scss"></style>