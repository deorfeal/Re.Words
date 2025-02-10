<template>
    <div class="empty">
        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.4976 12.2133L10.9235 7.63923C10.4842 7.19992 9.77182 7.19992 9.3325 7.63923L7.34375 9.62798L12.7133 14.9976L8.13923 19.5717C7.69992 20.011 7.69992 20.7233 8.13923 21.1627L10.128 23.1514L15.4976 17.7818L20.0717 22.3559C20.511 22.7952 21.2233 22.7952 21.6627 22.3559L23.6514 20.3672L18.2818 14.9976L22.8559 10.4235C23.2952 9.98415 23.2952 9.27182 22.8559 8.8325L20.8672 6.84375L15.4976 12.2133ZM15.5 29.625C7.42285 29.625 0.875 23.0771 0.875 15C0.875 6.92285 7.42285 0.375 15.5 0.375C23.5771 0.375 30.125 6.92285 30.125 15C30.125 23.0771 23.5771 29.625 15.5 29.625Z"
                fill="white" />
        </svg>
        <span>
            This is empty
        </span>
    </div>
</template>

<style lang="scss">
.empty {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    svg {
        width: 36px;
        height: 36px;
    }
}
</style>