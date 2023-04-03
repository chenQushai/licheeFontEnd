<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    export default {
        methods: {},
    }
</script>
<style lang="scss">
    @import "assets/css/basic";
    @import "assets/css/common";
    @import "assets/css/changeElement.scss";
    @import "assets/css/sysCss";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
    }

    /*.el-main {*/
    /*border-top:1px solid #dcdfe6;*/
    /*!*min-width: 1130px;*!*/
    /*}*/
</style>
