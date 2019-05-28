<template lang="html">
    <div>
        <all-header></all-header>
        <hslider></hslider>
        <Novice></Novice>
        <Borrow></Borrow>
        <Money></Money>
        <Product></Product>
        <Life></Life>
        <Footer></Footer>
        <Navbar></Navbar>
    </div>
</template>

<script>
import allHeader from '../public/header.vue'
import hslider from './hslider.vue'
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
import Product from './product.vue'
import Life from './life.vue'
import Footer from '../public/footer.vue'
import Navbar from '../public/navbar.vue'

export default {
    components:{
        allHeader,
        hslider,
        Novice,
        Borrow,
        Money,
        Product,
        Life,
        Footer,
        Navbar
    }
}
</script>

