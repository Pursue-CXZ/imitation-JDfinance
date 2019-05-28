<template lang="html">
    <div>
        <all-header></all-header>
        <Islider></Islider>
        <Welfare></Welfare>
        <Service></Service>
        <Footer></Footer>
        <Navbar></Navbar>
    </div>
</template>

<script>
    import allHeader from '../public/header.vue'
    import Islider from './islider.vue'
    import Welfare from './welfare.vue'
    import Service from './service.vue'
    import Footer from '../public/footer.vue'
    import Navbar from '../public/navbar.vue'

    export default {
        components:{
            allHeader,
            Islider,
            Welfare,
            Service,
            Footer,
            Navbar
        }
    }
</script>

