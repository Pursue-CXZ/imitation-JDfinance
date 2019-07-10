import Vue from "vue"
import App from "./App.vue"
import router from "./router"

Vue.config.productionTip = false


new Vue({
    el: "#app",
    router,
    components: { App },
    render(c){
       return c(App)
    }
})
