<script setup lang="ts">

import Head from '@/components/Head.vue'
import Search from '@/components/Search.vue'
import Menu from '@/components/Menu.vue'
import AddWordButton from '@/components/AddWordButton.vue';

</script>

<template>
    <div class="home page">
        <div class="container">
            <div class="home__inner">

                <Head title="Words" :isBack="false" class="home__head" />
                <Search class="home__search" />
                <Menu class="home__menu" />
            </div>
        </div>
        <teleport to="body">
            <AddWordButton />
        </teleport>
    </div>
</template>

<style lang="scss">
.home__head {
    margin-bottom: 10px;
}

.home__search {
    margin-bottom: 15px;
}
</style>