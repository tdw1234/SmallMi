<template>
<div>
    <header-page></header-page>
    <middle-page></middle-page>
    <footer-page></footer-page>
</div>
</template>

<script>
    import HeaderPage from "./HeaderPage";
    import FooterPage from "./FooterPage";
    import MiddlePage from "./MiddlePage";
    export default {
        name: "HomePage",
        components:{HeaderPage,FooterPage,MiddlePage}
    }
</script>

<style lang = "scss" scoped>
    .container{
        width: 1226px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        background-color: #fff;
    }



</style>
