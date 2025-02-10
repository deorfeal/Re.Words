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
                <div class="home__head">

                    <Head title="Words" :isBack="false" class="home__head" />
                    <Search class="home__search" />
                </div>
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
    margin-bottom: 12px;
}

.home__search {
    margin-bottom: 12px;
}
</style>