<script setup lang="ts">

</script>

<template>
    <section class="greeting">
        <div class="container">
            <div class="greeting__inner">
                <div class="greeting__logo logo">
                    <img class="logo__img" src="/images/logo.svg" alt="logo">
                </div>
                <h1 class="greeting__title">
                    Note of words in your pocket
                </h1>
                <router-link class="greeting__btn btn btn--white" to="/entrance">
                    Start
                </router-link>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.greeting {

    &__inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100svh;
    }

    &__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 26px;
        animation: sloganAnimation 3s forwards;
        max-width: 170px;
    }

    &__btn {
        width: 100%;
        max-width: 167px;
        animation: buttonAnimation 3s 1.5s forwards;
        opacity: 0;
        transform: translateY(120px) scale(1.5);
    }
}

.logo {
    width: 145px;
    height: 40px;
    animation: logoAnimation 3s forwards;

    &__img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

@keyframes logoAnimation {
    0% {
        opacity: 0;
        transform: scale(0);
    }

    50% {
        opacity: 1;
        transform: scale(1);
    }

    100% {
        transform: scale(1) translateY(-120px);
    }
}

@keyframes sloganAnimation {
    0% {
        opacity: 0;
        transform: scale(0) translateY(120px);
    }

    50% {
        opacity: 0;
        transform: scale(0) translateY(120px);
    }

    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

@keyframes buttonAnimation {
    0% {
        opacity: 0;
        transform: translateY(120px) scale(1.5);
    }

    50% {
        opacity: 0;
        transform: translateY(120px) scale(1.5);
    }

    100% {
        opacity: 1;
        transform: translateY(120px) scale(1);
    }
}
</style>