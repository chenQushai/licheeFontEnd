<template>
    <div class="page__header">
        <div class="page__title">
            {{title}}
        </div>
        <div class="page__button">
            <slot name="buttonContent"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-header",
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page__header {
        display: flex;
        width: 100%;
        height: 48px;
        border-bottom: 1px solid #D9D9D9;
        background-color: white;
        .page__title {
            line-height: 30px;
            font-size: 18px;
            font-weight: bold;
            color: #262626;
            padding: 9px 12px;
        }
        .page__button {
            flex: 1;
            padding: 7px 12px;
            text-align: right;
        }
    }
</style>