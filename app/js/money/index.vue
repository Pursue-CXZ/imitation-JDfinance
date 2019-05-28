<template lang="html">
    <div>
        <all-header></all-header>
        <Mslider></Mslider>
        <Ada></Ada>
        <Mmoney></Mmoney>
        <Adb></Adb>
        <Finance></Finance>
        <Adc></Adc>
        <Footer cname="mfooter"></Footer>
        <Navbar></Navbar>
    </div>
</template>

<script>
    import allHeader from '../public/header.vue'
    import Mslider from './mslider.vue'
    import Ada from './ada.vue'
    import Mmoney from './money.vue'
    import Adb from './adb.vue'
    import Finance from './finance.vue'
    import Adc from './adc.vue'
    import Footer from '../public/footer.vue'
    import Navbar from '../public/navbar.vue'

    export default {
        components:{
            allHeader,
            Mslider,
            Ada,
            Mmoney,
            Adb,
            Finance,
            Adc,
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
