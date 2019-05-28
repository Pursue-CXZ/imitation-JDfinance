<template lang="html">
    <div>
        <all-header></all-header>
        <Rslider></Rslider>
        <Daily></Daily>
        <In></In>
        <More></More>
        <Footer cname="mfooter"></Footer>
        <Navbar></Navbar>
    </div>
</template>

<script>
    import allHeader from '../public/header.vue'
    import Rslider from './rslider.vue'
    import Daily from './daily.vue'
    import In from './in.vue'
    import More from './more.vue'
    import Footer from '../public/footer.vue'
    import Navbar from '../public/navbar.vue'

    export default {
        components:{
            allHeader,
            Rslider,
            Daily,
            In,
            More,
            Footer,
            Navbar
        }
    }
</script>
<style lang="scss">
    .mfooter{
        margin-top: 0 !important;
        ul{
            li:first-child{
                display: none;
            }
        }
    }
</style>
